import { IField } from "@/interfaces/IField";
import { IHookRequest } from "@/interfaces/IHookRequest";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

export const getFields = async (hookRequest?: IHookRequest<{}>) => {
  const axiosInstance = getAxiosInstance(hookRequest?.context);
  const response = await axiosInstance.get<IField[]>("/fields");
  return response.data;
};

export const useFields = (hookRequest?: IHookRequest<{}>) =>
  useQuery(["fields"], async () => await getFields(hookRequest));
