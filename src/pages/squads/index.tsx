import { getSquads, useSquads } from "@/hooks/squads/useSquads";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    "squads",
    async () => await getSquads({ context })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Squads = () => {
  const { data: squads } = useSquads();

  return (
    <Grid container sm={12}>
      <Grid item sm={12}>
        <Toolbar>
          <Link href="/squads/create">
            <Button variant="contained">Crear escuadra</Button>
          </Link>
        </Toolbar>
      </Grid>
      {squads?.map((squad) => (
        <Grid key={squad.id} item sm={12}>
          <Toolbar>
            <Avatar src={squad.emblem} />
            <Link href={`/squads/${squad.id}`}>
              <Button variant="text">{squad.name}</Button>
            </Link>
          </Toolbar>
        </Grid>
      ))}
    </Grid>
  );
};

export default Squads;
