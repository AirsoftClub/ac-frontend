import { IHookRequest } from "@/interfaces/IHookRequest";
import { Squad } from "@/models/Squad";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

export const getSquads = async (
  request?: IHookRequest<{}>
): Promise<Squad[]> => {
  const axiosIntance = getAxiosInstance(request?.context);
  const response = await axiosIntance.get<Squad[]>("/squads");
  return response.data;
};

export const useSquads = (request?: IHookRequest<{}>) =>
  useQuery("squads", async () => await getSquads(request));
