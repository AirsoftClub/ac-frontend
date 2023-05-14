import { getUser, useUser } from "@/hooks/user/useUser";
import { IPageProps } from "@/interfaces/IPageProps";
import { GetServerSideProps } from "next";
import { signIn, signOut } from "next-auth/react";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(["user"], async () => await getUser({ context }));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data: user } = useUser();

  return (
    <div>
      <button onClick={() => signIn("google")}>SignIn</button>
      <button onClick={() => signOut()}>SignOut</button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}
