import { IHookRequest } from "@/interfaces/IHookRequest";
import { Field } from "@/models/IField";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

export const getFields = async (hookRequest?: IHookRequest<{}>) => {
  const axiosInstance = getAxiosInstance(hookRequest?.context);
  const response = await axiosInstance.get<Field[]>("/fields");
  return response.data;
};

export const useFields = (hookRequest?: IHookRequest<{}>) =>
  useQuery(["fields"], async () => await getFields(hookRequest));
