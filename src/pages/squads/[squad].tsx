import { getSquad, useSquad } from "@/hooks/squads/useSquad";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const squadId = context.params?.squad as string;
  const squad = await getSquad({
    context,
    payload: {
      id: String(squadId),
    },
  });

  const queryClient = new QueryClient();
  queryClient.setQueriesData(["squads", squadId], squad);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ShowSquad = (): JSX.Element => {
  const router = useRouter();
  const { data: squad } = useSquad({
    payload: {
      id: String(router.query.squad),
    },
  });

  if (!squad) return <>No squad</>;

  return <div>{squad.name}</div>;
};

export default ShowSquad;
