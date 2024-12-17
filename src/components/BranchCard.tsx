"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TBranch } from "@/types";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

type BranchCardProps = {
  branch: TBranch & { location: { lat: number; lng: number } };
};

const ProductCard = ({ branch }: BranchCardProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Card className="w-[300px] h-[450px] space-y-1">
      {branch.location ? (
        <GoogleMap
          mapContainerClassName="w-full h-[300px]"
          center={branch.location}
          zoom={10}
        >
          <Marker position={branch.location} />
        </GoogleMap>
      ) : (
        <div className="w-full h-[300px] bg-gray-200">
          <div className="w-full h-full flex justify-center items-center">
            <p>No image available</p>
          </div>
        </div>
      )}
      <CardContent>
        <h1 className="text-xl font-bold mb-1.5">{branch.name}</h1>
        <div className="flex items-center gap-4 text-gray-500 overflow-hidden">
          <p>Delovnik:</p>
          <p>{branch.working_hours}</p>
        </div>
        <div className="flex items-center gap-4 text-gray-500 overflow-hidden">
          <p>Manager:</p>
          <p>{branch.manager}</p>
        </div>
        <div className="flex items-center gap-4 text-gray-500 overflow-hidden">
          <p>Kontakt:</p>
          <p>{branch.contact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

/*const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    if (isLoaded && mapRef.current && !markerRef.current) {
      // Create the AdvancedMarkerElement once the map is loaded
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat: 10, lng: 10 },
      });
    }
  }, [isLoaded]);*/
