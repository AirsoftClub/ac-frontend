import { useCreateSquad } from "@/hooks/squads/useCreateSquad";
import { Button, FilledInput } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const SquadCreate = () => {
  const router = useRouter();
  const mutation = useCreateSquad();
  const [name, setName] = useState("");
  const [emblem, setEmblem] = useState("");

  const submit = () => {
    mutation.mutate({ payload: { name: name, emblem: emblem } });
    router.push("/squads");
  };

  return (
    <div>
      <FilledInput
        type="text"
        value={name}
        placeholder="Name"
        onChange={(val) => setName(val.target.value)}
      />
      <FilledInput
        type="file"
        value={emblem}
        placeholder="Emblem"
        onChange={(val) => setEmblem(val.target.value)}
      />
      <Button variant="contained" onClick={submit}>
        Crear
      </Button>
    </div>
  );
};

export default SquadCreate;
