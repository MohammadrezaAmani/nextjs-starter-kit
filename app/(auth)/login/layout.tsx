import PublicRoute from "@/components/routes/public-route";
import { NextPage } from "next";
import Login from "./page";
export default () => (
  <PublicRoute>
    <Login />
  </PublicRoute>
);
