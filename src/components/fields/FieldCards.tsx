import { Field } from "@/models/Field";
import Grid from "@mui/material/Grid";
import { FieldCard } from "./FieldCard";

interface FieldCardsProps {
  fields: Field[];
}

export const FieldCards = ({ fields }: FieldCardsProps) => {
  return (
    <Grid container spacing={2}>
      {fields.map((field) => (
        <Grid item sm={12}>
          <FieldCard key={field.id} field={field} />
        </Grid>
      ))}
    </Grid>
  );
};
