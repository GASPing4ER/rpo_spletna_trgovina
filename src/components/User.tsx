import Link from "next/link";
import { User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { useTranslations } from "next-intl";

const UserProfile = () => {
  const t = useTranslations("Profile");
  return (
    <Link href="/profile">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <User className="h-6 w-6 text-textPrimary" />
          </TooltipTrigger>
          <TooltipContent>
            <p> {t("profile_tooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default UserProfile;
