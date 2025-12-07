import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden xs:inline-flex rounded-full px-4">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>

      {/* Floating segmented nav, centered at bottom and always visible */}
      <NavMenu className="fixed left-1/2 bottom-5 z-40 -translate-x-1/2" />
    </nav>
  );
};

export default Navbar;
