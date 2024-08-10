import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center p-3 rounded-md hover:bg-gray-600 hover:text-white">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center p-3 rounded-md hover:bg-gray-600 hover:text-white">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center p-3 rounded-md hover:bg-gray-600 hover:text-white">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center p-3 rounded-md hover:bg-gray-600 hover:text-white">
          Docs
        </a>
      </Typography>
    </ul>
  );
}
 
export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto bg-black text-white">
      <div className="flex items-center justify-between">
        {/* change typo to link */}
        <Typography
          as="a"
          href="#"
          variant="h6"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto p-5 text-inherit lg:hidden hover:bg-gray-600"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
