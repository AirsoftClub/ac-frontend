import { getFields, useFields } from "@/hooks/fields/useFields";
import { IField } from "@/interfaces/IField";
import Chip from "@mui/material/Chip";
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
  queryClient.prefetchQuery(
    ["fields"],
    async () => await getFields({ context })
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const FieldCard = (field: IField) => {
  return (
    <Card>
      <CardHeader
        title={field.name}
        subheader={
          <Stack spacing={1} direction="row">
            {field.tags.map((tag) => (
              <Chip label={tag.description} size="small" />
            ))}
          </Stack>
        }
      />

      <CardContent>
        <Typography>{field.description}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="text">Partidas</Button>
        <Button variant="text">Fotos</Button>
      </CardActions>
    </Card>
  );
};

export default () => {
  const { data: fields, isLoading } = useFields();

  if (isLoading) {
    return "Is Loading";
  }

  if (!fields) return;

  return (
    <Container>
      <Stack spacing={2}>{fields.map((field) => FieldCard(field))}</Stack>
    </Container>
  );
};
