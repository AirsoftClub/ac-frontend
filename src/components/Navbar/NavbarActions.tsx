"use client";

import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState } from "react";
import { Avatar, Menu, Stack } from "@mui/material";

const GuestActions = () => {
  return (
    <div>
      <Button
        sx={{ textTransform: "none" }}
        variant="contained"
        onClick={() => signIn("google")}
      >
        <GoogleIcon sx={{ marginRight: 1 }} />
        Iniciar sesion con Google
      </Button>
    </div>
  );
};

const AuthActions = ({ session }: { session: Session }) => {
  const [avatarEl, setAvatarEl] = useState<null | HTMLElement>(null);
  const open = Boolean(avatarEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAvatarEl(event.currentTarget);
  };

  const handleClose = () => {
    setAvatarEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        onClick={handleAvatarClick}
        alt={session.user.name ?? ""}
        src={session.user.image ?? ""}
      ></Avatar>
      <Menu
        id="basic-menu"
        anchorEl={avatarEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Perfil</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export const NavbarActions = () => {
  const session = useSession();

  return (
    <>
      {session.status === "authenticated" ? (
        <AuthActions session={session.data} />
      ) : (
        <GuestActions />
      )}
    </>
  );
};
