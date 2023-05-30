import { FieldCard } from "@/components/fields/FieldCard";
import { getField, useField } from "@/hooks/fields/useField";
import { Container } from "@mui/material";
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

  queryClient.setQueryData(["fields", payload.id], field);

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

  if (!field) return <>Field does not exists</>;

  return (
    <Container>
      <FieldCard field={field} />
    </Container>
  );
};
