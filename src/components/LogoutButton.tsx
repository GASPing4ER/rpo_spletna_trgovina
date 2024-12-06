"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path as needed
import { logout } from "@/actions/auth";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button variant="outline" className="w-full" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
