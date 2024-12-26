"use client";

import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TBranch, TBranchNotification } from "@/types";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useLocale, useTranslations } from "next-intl";
//import { getNotifications } from "@/actions/contact";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "./ui/separator";

type BranchCardProps = {
  branch: TBranch & { location: { lat: number; lng: number } };
  notifications: TBranchNotification[];
};

const BranchCard = ({ branch, notifications = [] }: BranchCardProps) => {
  const locale = useLocale();
  const t = useTranslations("Contact");
  const { isLoaded } = useLoadScript(
    useMemo(
      () => ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      }),
      []
    )
  );

  if (!isLoaded) return <div>{t("loading")}</div>;

  return (
    <Card className="w-[360px] h-[600px] space-y-4 overflow-auto">
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
      <CardContent className="flex flex-col">
        {/* Branch Info */}
        <h1 className="text-xl font-bold mb-1.5">
          {t("branch_name")} {branch.name}
        </h1>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("working_hours")}:</h3>
          <p>{branch.working_hours}</p>
        </div>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("manager")}:</h3>
          <p>{branch.manager}</p>
        </div>
        <div className="flex items-center gap-4 overflow-hidden">
          <h3 className="font-bold text-base">{t("contact")}:</h3>
          <p>{branch.contact}</p>
        </div>

        {/* Notifications */}
        {notifications.length > 0 ? (
          <div className="flex flex-col overflow-hidden">
            <h3 className="font-bold text-base">{t("notifications")}:</h3>
            <ul>
              <li key={notifications[0].id}>
                {locale === "sl"
                  ? notifications[0].sl_description
                  : notifications[0].en_description}
              </li>
            </ul>
            {notifications.length > 1 && (
              <Popover>
                {({ open }) => (
                  <>
                    <PopoverButton className="text-[#4156D8] text-sm">
                      {t("view_all")}
                    </PopoverButton>
                    <PopoverBackdrop className="fixed inset-0 bg-black/15" />
                    <AnimatePresence>
                      {open && (
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute bg-white shadow-lg rounded-md p-4 w-[360px] z-10"
                        >
                          <h3 className="font-bold mb-2">
                            {t("all_notifications")}
                          </h3>
                          <ul>
                            {notifications.map((notification, index) =>
                              index === 0 ? (
                                <div key={notification.id}>
                                  <li>
                                    {locale === "sl"
                                      ? notification.sl_description
                                      : notification.en_description}
                                  </li>
                                  <Separator className="mb-2 mt-2" />
                                </div>
                              ) : (
                                <li key={notification.id} className="mb-2">
                                  {locale === "sl"
                                    ? notification.sl_description
                                    : notification.en_description}
                                </li>
                              )
                            )}
                          </ul>
                        </PopoverPanel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4 overflow-hidden">
            <h3 className="font-bold text-base">{t("notifications")}:</h3>
            <p>{t("no_notifications")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BranchCard;
