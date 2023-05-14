import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavbarActions } from "./NavbarActions";
import { NavbarNavigation } from "./NavbarNavigation";

export const Navbar = (): JSX.Element => {
  return (
    <Box>
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <div id="logo">
          <Typography variant="h5">AirsoftClub</Typography>
        </div>
        <div id="navbar-center">
          <NavbarNavigation />
        </div>
        <div id="navbar-actions">
          <NavbarActions />
        </div>
      </Toolbar>
    </Box>
  );
};
