import axios, { AxiosInstance } from "axios";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export const getAxiosInstance = (
  context?: GetServerSidePropsContext
): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  });

  axiosInstance.interceptors.request.use(async (config) => {
    const session = await getSession(context);

    if (session) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  });

  return axiosInstance;
};
