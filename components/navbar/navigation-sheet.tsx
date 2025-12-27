"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHiddenPrimitive.Root>
        <SheetTitle>Navigation Drawer</SheetTitle>
        <SheetDescription>Daftar tautan navigasi utama Nexteam.</SheetDescription>
      </VisuallyHiddenPrimitive.Root>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        // Prevent auto-focus from scrolling back to the burger button when closing
        onCloseAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        <Logo />

        {/* Simple vertical list navigation for mobile */}
        <nav className="mt-10 space-y-3 text-sm">
          <SheetClose asChild>
            <Link href="/" className="block rounded-lg px-3 py-2 hover:bg-muted">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#services" className="block rounded-lg px-3 py-2 hover:bg-muted">
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#faq" className="block rounded-lg px-3 py-2 hover:bg-muted">
              FAQ
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#clients" className="block rounded-lg px-3 py-2 hover:bg-muted">
              Clients
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#testimonials" className="block rounded-lg px-3 py-2 hover:bg-muted">
              Testimonials
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#team" className="block rounded-lg px-3 py-2 hover:bg-muted">
              Our Team
            </Link>
          </SheetClose>
        </nav>

        <div className="mt-8 space-y-4">
          <Button asChild className="w-full md:hidden rounded-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
