import { Field } from "@/models/Field";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { TagChips } from "../tags/TagChips";

interface FieldCardProps {
  field: Field;
}

export const FieldCard = ({ field }: FieldCardProps) => (
  <Card key={field.id}>
    <CardHeader title={field.name} subheader={<TagChips tags={field.tags} />} />

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
