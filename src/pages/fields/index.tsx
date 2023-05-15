import { TagChips } from "@/components/tags/TagChips";
import { getFields, useFields } from "@/hooks/fields/useFields";
import { Field } from "@/models/Field";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GetServerSidePropsContext } from "next";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    "fields",
    async () => await getFields({ context })
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const FieldCard = (field: Field) => {
  return (
    <Card key={field.id}>
      <CardHeader
        title={field.name}
        subheader={<TagChips tags={field.tags} />}
      />

      <CardContent>
        <Typography>{field.description}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="text" href={`/fields/${field.id}`}>
          Detalles
        </Button>
        <Button variant="text">Partidas</Button>
        <Button variant="text">Fotos</Button>
      </CardActions>
    </Card>
  );
};

export default () => {
  const { data: fields } = useFields();

  if (!fields) return;

  return (
    <Container>
      <Stack spacing={2}>{fields.map((field) => FieldCard(field))}</Stack>
    </Container>
  );
};
