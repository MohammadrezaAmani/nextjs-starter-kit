"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { apiClient } from "../lib/baseApi";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  is_active?: boolean;
  created_at: string;
  updated_at: string;
  mobile: string;
  avatar?: string;
  role?: string;
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: User;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token) {
          apiClient.setTokens(access_token, refresh_token, 3600);
          const userData = await apiClient.get<User>("/api/user/me");
          setUser(userData);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      const response = await apiClient.post<AuthResponse>(
        "/api/user/auth/login",
        { username, password }
      );

      apiClient.setTokens(
        response.access_token,
        response.refresh_token,
        response.expires_in
      );

      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);

      setUser(response.user);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(`Login failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, username: string, password: string) => {
    setIsLoading(true);
    try {
      if (!name || !username || !password) {
        throw new Error("All fields are required");
      }

      const response = await apiClient.post<AuthResponse>(
        "/api/user/auth/register",
        { name, username, password }
      );

      apiClient.setTokens(
        response.access_token,
        response.refresh_token,
        response.expires_in
      );

      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);

      setUser(response.user);
    } catch (error) {
      console.error("Registration error:", error);
      throw new Error(`Registration failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await apiClient.get("/api/user/auth/logout");

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      apiClient.setTokens("", "", 0);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error(`Logout failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
