import { FieldCard } from "@/components/fields/FieldCard";
import { getFields, useFields } from "@/hooks/fields/useFields";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
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

export default () => {
  const { data: fields } = useFields();

  if (!fields) return;

  return (
    <Container>
      <Stack spacing={2}>
        {fields.map((field) => (
          <FieldCard field={field} />
        ))}
      </Stack>
    </Container>
  );
};
