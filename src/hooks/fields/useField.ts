import { IHookRequest } from "@/interfaces/IHookRequest";
import { Field } from "@/models/Field";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";

interface GetFieldPayload {
  id: string;
}

export const getField = async ({
  context,
  payload,
}: IHookRequest<GetFieldPayload>) => {
  const axiosInstance = getAxiosInstance(context);
  const response = await axiosInstance.get<Field>(`/fields/${payload?.id}`);
  return response.data;
};

export const useField = ({ context, payload }: IHookRequest<GetFieldPayload>) =>
  useQuery(
    ["fields", payload?.id],
    async () => await getField({ context, payload })
  );
