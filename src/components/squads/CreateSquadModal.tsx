import { ToastContext } from "@/contexts/ToastProvider";
import { useCreateSquad } from "@/hooks/squads/useCreateSquad";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FilledInput,
  Modal,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const CreateSquadModal = (): JSX.Element => {
  const router = useRouter();
  const mutation = useCreateSquad();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const { pushToast } = useContext(ToastContext);

  const submit = () => {
    mutation.mutate(
      { payload: { name: name } },
      {
        onSuccess: () => {
          setOpen(false);
          router.push("/squads");
        },
        onError: (error) => {
          // @ts-ignore
          pushToast(error.response.data.detail[0].msg, "error");
        },
      }
    );
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Crear escuadra</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: 400 }}>
          <CardHeader title="Crear tu escuadra" subheader="Dinos el nombre" />
          <CardContent>
            <FilledInput
              fullWidth
              type="text"
              value={name}
              placeholder="Nombre"
              onChange={(val) => setName(val.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={submit}>
              Crear
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};
