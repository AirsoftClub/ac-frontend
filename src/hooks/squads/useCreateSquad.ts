import { IHookRequest } from "@/interfaces/IHookRequest";
import { getAxiosInstance } from "@/services/axiosService";
import { useMutation } from "react-query";

interface CreateSquadPayload {
  name: string;
}

export const createSquad = async ({
  context,
  payload,
}: IHookRequest<CreateSquadPayload>) => {
  const axiosInstance = getAxiosInstance(context);
  const response = await axiosInstance.post(`/squads`, payload);
  return response.data;
};

export const useCreateSquad = () =>
  useMutation(
    "squads",
    async (request: IHookRequest<CreateSquadPayload>) =>
      await createSquad(request)
  );
