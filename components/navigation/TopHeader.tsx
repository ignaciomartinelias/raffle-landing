"use client";

import React from "react";
import MenuItem from "./MenuItem";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";

export const TopHeader: React.FC = () => {
  return (
    <ul className="flex flex-row justify-between items-center w-full max-w-[976px]">
      <li className="flex w-full items-center">
        <div className="w-16 h-8 relative">
          <Image
            src="/logo/raffle_logo_light.svg"
            alt="raffle logo"
            fill={true}
          />
        </div>
      </li>
      <li className="flex w-fit items-center justify-center">
        <NavigationMenu className="transition-all rounded-2xl ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <MenuItem
                    title="Raffle Chat"
                    description="Boost your self-service"
                  />
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <MenuItem
                    title="Raffle Chat"
                    description="Boost your self-service"
                  />
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <MenuItem
                    title="Raffle Chat"
                    description="Boost your self-service"
                  />
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <MenuItem
                    title="Raffle Chat"
                    description="Boost your self-service"
                  />
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </li>
      <li className="flex w-full items-center gap-2 justify-end">
        <Button variant="default" className="text-sm ml-2">
          Docs
        </Button>
        <Button variant="secondary" className="text-sm">
          Sign In
        </Button>
      </li>
    </ul>
  );
};
export default TopHeader;
