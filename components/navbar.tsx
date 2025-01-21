import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";

export const Navbar = () => {
  const {openConnectModal} = useConnectModal()
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Image src='/logo.png' width={25} height={25} alt="BuildMyDex"/>
            <p className="font-bold text-inherit">BMDex</p>
          </NextLink>
        </NavbarBrand>
        <NavbarItem>
            <span className="px-3 py-1 text-xs bg-slate-100 dark:bg-gray-900 text-inherit border rounded-full">
                v0.1
            </span>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="flex items-center"
      >
       <NavbarItem>
                <ThemeSwitch/>
       </NavbarItem>
        <NavbarItem>
          <Button
            isExternal
            as={Link}
            onPress={openConnectModal}
            className="text-sm font-normal rounded-full text-default-600 bg-default-100"
            variant="flat"
          >
            Connect Wallet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
