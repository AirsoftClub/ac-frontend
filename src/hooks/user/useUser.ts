import { IHookRequest } from "@/interfaces/IHookRequest";
import { IUser } from "@/interfaces/IUser";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

export const getUser = async (hookRequest?: IHookRequest<{}>) => {
  const axiosInstance = getAxiosInstance(hookRequest?.context);
  return await axiosInstance.get<IUser>("/user/me");
};

export const useUser = (hookRequest?: IHookRequest<{}>) =>
  useQuery(["user"], async () => await getUser(hookRequest));
