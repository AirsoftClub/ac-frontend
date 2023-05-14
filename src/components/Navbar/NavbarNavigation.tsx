import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const NavbarNavigation = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text" href="/fields">
        Campos
      </Button>
    </Stack>
  );
};
