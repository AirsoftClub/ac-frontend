import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { NavbarActions } from "./NavbarActions";
import { NavbarNavigation } from "./NavbarNavigation";

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Stack direction="row" spacing={2}>
        <IconButton onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Logo />
      </Stack>
      <NavbarActions />

      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Stack direction="column" spacing={2} padding={2} width={280}>
          <Logo />
          <NavbarNavigation />
        </Stack>
      </Drawer>
    </Toolbar>
  );
};

const NormalNavbar = () => {
  return (
    <Toolbar
      variant="dense"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Logo />
      <div id="navbar-center">
        <NavbarNavigation />
      </div>
      <div id="navbar-actions">
        <NavbarActions />
      </div>
    </Toolbar>
  );
};

export const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box>{isSmall ? <NormalNavbar /> : <SmallNavbar />}</Box>;
};
