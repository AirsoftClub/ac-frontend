import { FieldCards } from "@/components/fields/FieldCards";
import { useNearbyFields } from "@/hooks/fields/useNearbyFields";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const { data: nearbyFields } = useNearbyFields({ payload: position });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position);
      });
    }
  }, [position]);

  return (
    <Container>
      <Typography variant="h4">Campos cercanos a ti</Typography>
      <FieldCards fields={nearbyFields ?? []} />
    </Container>
  );
}
