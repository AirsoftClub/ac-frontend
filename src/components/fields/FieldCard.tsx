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
import Link from "next/link";

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
      <Link href={`/fields/${field.id}`}>
        <Button variant="text">Detalles</Button>
      </Link>
      <Button variant="text">Partidas</Button>
      <Button variant="text">Fotos</Button>
    </CardActions>
  </Card>
);
