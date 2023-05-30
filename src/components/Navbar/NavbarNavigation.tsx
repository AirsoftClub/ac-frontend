import Button from "@mui/material/Button";
import Link from "next/link";

export const NavbarNavigation = () => {
  return (
    <>
      <Button variant="text">Partidas</Button>
      <Link href="/fields">
        <Button variant="text">Campos</Button>
      </Link>
      <Link href="/squads">
        <Button variant="text">Escuadras</Button>
      </Link>
    </>
  );
};
