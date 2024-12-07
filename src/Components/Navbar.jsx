import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
 

function NavBar() {
  return (
    <Navbar shouldHideOnScroll  onBlur={false} className="bg-[rgb(0,34,40)] w-full overflow-x-hidden ">
      <NavbarBrand>
       <img src="Logo.png" alt="" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About us 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground"  href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
       
        <NavbarItem>
          <Button as={Link}  className="bg-[#0FF1F6] rounded-full px-0 py-0 text-black md:px-3 md:py-2 text-[12px] font-semibold " href="#" variant="flat">
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  className=" bg-[rgb(0,34,40)]   border text-white rounded-full  px-0 py-0  md:px-3 md:py-2 text-[12px] font-semibold" href="#" >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


export default  NavBar;