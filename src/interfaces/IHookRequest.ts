import { GetServerSidePropsContext } from "next";

export interface IHookRequest<T> {
  context?: GetServerSidePropsContext;
  payload?: T;
}
