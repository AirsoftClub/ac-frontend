import { IHookRequest } from "@/interfaces/IHookRequest";
import { Squad } from "@/models/Squad";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

type GetSquadRequest = IHookRequest<{
  id: string | number;
}>;

export const getSquad = async ({ context, payload }: GetSquadRequest) => {
  const axiosIntance = getAxiosInstance(context);
  const response = await axiosIntance.get<Squad | undefined>(
    `/squads/${payload?.id}`
  );
  return response.data;
};

export const useSquad = ({ context, payload }: GetSquadRequest) =>
  useQuery(
    ["squads", payload?.id],
    async () => await getSquad({ context, payload })
  );
