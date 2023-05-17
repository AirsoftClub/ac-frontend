import { useNearbyFields } from "@/hooks/fields/useNearbyFields";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const { data } = useNearbyFields({
    payload: {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    },
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position => {...position});
      });
    }
  }, [position]);

  return (
    <div>
      {nearbyFields.map((field) => (
        <p>{field.name}</p>
      ))}
    </div>
  );
}
