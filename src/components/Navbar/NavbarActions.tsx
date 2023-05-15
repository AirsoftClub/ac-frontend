"use client";

import GoogleIcon from "@mui/icons-material/Google";
import { Avatar, Button, Menu, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const GuestActions = () => {
  return (
    <div>
      <Button onClick={() => signIn("google")} sx={{ textTransform: "none" }}>
        <GoogleIcon sx={{ marginRight: 1 }} color="info" />
        Sign In
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
      <Menu anchorEl={avatarEl} open={open} onClose={handleClose}>
        <MenuItem>Perfil</MenuItem>
        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
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
