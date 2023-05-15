import { TagChips } from "@/components/tags/TagChips";
import { getField, useField } from "@/hooks/fields/useField";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const fieldId = context.params?.field as string;
  const queryClient = new QueryClient();
  const payload = { id: fieldId };
  const field = await getField({ context, payload });

  if (!field) {
    return {
      redirect: {
        permanent: false,
        destination: "/fields",
      },
    };
  }

  queryClient.setQueryData(`field-${fieldId}`, field);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default () => {
  const router = useRouter();
  const fieldId = router.query.field as string;
  const payload = { id: fieldId };
  const { data: field } = useField({ payload });

  return (
    <Container>
      <Card>
        <CardHeader title={field?.name} />
        <CardContent>
          <Typography variant="body1">{field?.description}</Typography>
          <TagChips tags={field?.tags ?? []} />
        </CardContent>
        <CardActions>
          <Button variant="text">Partidas</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
