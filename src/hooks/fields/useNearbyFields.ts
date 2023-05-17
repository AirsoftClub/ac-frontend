import { IHookRequest } from "@/interfaces/IHookRequest";
import { Field } from "@/models/Field";
import { getAxiosInstance } from "@/services/axiosService";
import { useQuery } from "react-query";
import { useFields } from "./useFields";

export const getNearbyFields = async ({
  context,
  payload,
}: IHookRequest<GeolocationPosition | undefined>): Promise<Field[]> => {
  const axiosInstance = getAxiosInstance(context);
  const response = await axiosInstance.get<Field[]>("/fields/location", {
    params: {
      latitude: payload?.coords.latitude,
      longitude: payload?.coords.longitude,
    },
  });
  return response.data;
};

export const useNearbyFields = (
  hookRequest: IHookRequest<GeolocationPosition | undefined>
) =>
  hookRequest.payload
    ? useQuery(
        ["nearbyFields", hookRequest.payload],
        async () => await getNearbyFields(hookRequest)
      )
    : useFields({ context: hookRequest.context });
