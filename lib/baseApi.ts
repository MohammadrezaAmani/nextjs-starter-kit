import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

interface TokenData {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  timestamp: number;
}

interface ApiConfig {
  baseURL: string;
  timeout?: number;
  initialToken?: string;
  initialrefresh_token?: string;
}

interface refresh_tokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

class ApiClient {
  private instance: AxiosInstance;
  private tokens: TokenData;
  private refreshPromise: Promise<string> | null = null;
  private readonly config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
    this.tokens = {
      access_token: config.initialToken || "",
      refresh_token: config.initialrefresh_token || "",
      expires_in: 0,
      timestamp: Date.now(),
    };

    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private isTokenExpired(): boolean {
    const bufferTime = 5 * 60 * 1000;
    return (
      Date.now() >= this.tokens.timestamp + this.tokens.expires_in - bufferTime
    );
  }

  private async refresh_token(): Promise<string> {
    try {
      const response = await axios.post<refresh_tokenResponse>(
        `${this.config.baseURL}/auth/refresh`,
        {
          refresh_token: this.tokens.refresh_token,
        },
      );

      const { access_token, refresh_token, expires_in } = response.data;

      this.tokens = {
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in * 1000,
        timestamp: Date.now(),
      };

      return access_token;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      async (config) => {
        if (this.tokens.access_token && this.isTokenExpired()) {
          if (!this.refreshPromise) {
            this.refreshPromise = this.refresh_token();
          }

          const newToken = await this.refreshPromise;
          this.refreshPromise = null;
          config.headers.Authorization = `Bearer ${newToken}`;
        } else if (this.tokens.access_token) {
          config.headers.Authorization = `Bearer ${this.tokens.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(this.handleError(error)),
    );

    this.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest) {
          if (!this.refreshPromise) {
            this.refreshPromise = this.refresh_token();
          }

          try {
            const newToken = await this.refreshPromise;
            this.refreshPromise = null;
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return this.instance(originalRequest);
          } catch (refreshError) {
            return Promise.reject(this.handleError(refreshError as AxiosError));
          }
        }

        return Promise.reject(this.handleError(error));
      },
    );
  }

  private handleError(error: AxiosError): Error {
    const status = error.response?.status;
    const message =
      (error.response?.data as { message?: string })?.message || error.message;

    switch (status) {
      case 400:
        return new Error(`Bad Request: ${message}`);
      case 401:
        return new Error(`Unauthorized: ${message}`);
      case 403:
        return new Error(`Forbidden: ${message}`);
      case 404:
        return new Error(`Not Found: ${message}`);
      case 500:
        return new Error(`Server Error: ${message}`);
      case 501:
        return new Error(`Not Implemented: ${message}`);
      case 502:
        return new Error(`Bad Gateway: ${message}`);
      case 505:
        return new Error(`HTTP Version Not Supported: ${message}`);
      default:
        return new Error(`Request failed: ${message || "Unknown error"}`);
    }
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  public async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.patch<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }

  public setTokens(
    access_token: string,
    refresh_token: string,
    expires_in: number,
  ): void {
    this.tokens = {
      access_token,
      refresh_token,
      expires_in: expires_in * 1000,
      timestamp: Date.now(),
    };
  }
}

export const apiClient = new ApiClient({
  baseURL: "http://192.168.10.80:8000",
  timeout: 15000,
});
