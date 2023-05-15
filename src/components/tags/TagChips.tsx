import { Tag } from "@/models/Tag";
import AddIcon from "@mui/icons-material/Add";
import { Chip, IconButton, Stack } from "@mui/material";

interface TagChipsProps {
  tags: Tag[];
}

export const TagChips = ({ tags }: TagChipsProps): JSX.Element => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <AddIcon />
      </IconButton>
      {tags.map((tag) => (
        <Chip key={tag.id} label={tag.description} />
      ))}
    </Stack>
  );
};
