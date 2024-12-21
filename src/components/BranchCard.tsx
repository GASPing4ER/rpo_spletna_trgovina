"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TBranch } from "@/types";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useTranslations } from "next-intl";

type BranchCardProps = {
  branch: TBranch & { location: { lat: number; lng: number } };
};

const ProductCard = ({ branch }: BranchCardProps) => {
  const t = useTranslations("Contact");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>{t("loading")}</div>;

  return (
    <Card className="w-[300px] h-[450px] space-y-4">
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
            <p>{t("no_image")}</p>
          </div>
        </div>
      )}
      <CardContent>
        <h1 className="text-xl font-bold mb-1.5">
          {t("branch_name")} {branch.name}
        </h1>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("working_hours")}</h3>
          <p>{branch.working_hours}</p>
        </div>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("manager")}</h3>
          <p>{branch.manager}</p>
        </div>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("contact")}</h3>
          <p>{branch.contact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
