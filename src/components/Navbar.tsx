import { Bomb, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 md:backdrop-blur">
      <nav
        className=" w-full backdrop-blur
       justify-between items-center p-4 hidden md:flex shadow-md rounded-b-md pt-4"
      >
        <div className="flex gap-4">
          <Bomb className="h-5 w-5 text-purple-500 " />
          <span className="tracking-tighter font-bold">IPO</span>
        </div>
        <ul className="flex justify-center space-x-4 p-4">
          <li>Mainboard IPO</li>
          <li>SME IPO</li>
          <li>IPO Calendar</li>
          <li>IPO Glossary</li>
          <li>Message Board</li>
        </ul>
        <Button variant={"secondary"} className="bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
          Login
        </Button>
      </nav>
      <div className="md:hidden flex items-center justify-between p-4 bg-white">
        <div className="flex gap-2 items-center">
          <Bomb className="h-5 w-5 text-purple-500" />
          <span className="tracking-tighter font-bold">IPO</span>
        </div>
        <Button variant={"ghost"} onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="h-5 w-5 text-purple-500" />
        </Button>
      </div>

      {/* {MObile nav} */}
      <div>
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="absolute top-4 right-4 curosr-pointer">
            <X className="h-5 w-5" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <nav className="flex flex-col gap-2 p-6">
            <ul className="flex flex-col gap-4">
              <li>Mainboard IPO</li>
              <li>SME IPO</li>
              <li>IPO Calendar</li>
              <li>IPO Glossary</li>
              <li>Message Board</li>
            </ul>
            <div className="mt-4">
              <Button className="bg-purple-500 text-white w-full">Login</Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
