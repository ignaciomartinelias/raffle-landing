"use client";

import React from "react";
import { MessageSquareDot } from "lucide-react";

type TopHeaderProps = {
  className?: string;
  title?: string;
  description?: string;
};

export const TopHeader: React.FC<TopHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-lg">
        <MessageSquareDot className="size-4" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-neutral-300 text-nowrap">{title}</p>
        <p className="text-xs text-neutral-500 text-nowrap">{description}</p>
      </div>
    </div>
  );
};
export default TopHeader;
