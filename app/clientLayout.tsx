"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  //   useEffect(() => {
  //     // Set language direction based on the current locale
  //     const direction = i18n?.language === "fa" ? "rtl" : "ltr";
  //     document.documentElement.setAttribute("dir", direction);
  //   }, [i18n?.language]);

  return <I18nextProvider i18n={i18n}>{children} </I18nextProvider>;
};

export default ClientLayout;
