"use client";

import { useEffect } from "react";

const success: PositionCallback = (position) => {
  console.log(position);
};

export default function Home() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  return <div>Index Page</div>;
}
