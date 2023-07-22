import React from "react";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { routes } from "./constant";
import { useRouter } from "next/router";
// import { useAuthContext } from 'src/components/contexts/AuthContext'
// import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import Link from "next/link";
import { StudiumzLogo } from "../../icons/StudiumzLogo";

export const NavBar: React.FC = () => {
  const router = useRouter();
  // const { user }: IAuthContext = useAuthContext()

  return (
    <>
      <Navbar
        rounded={true}
        className="fixed flex w-full justify-between px-[0.15rem] sm:px-5 py-3 z-50 shadow-md"
      >
        <Navbar.Brand href="/">
          <StudiumzLogo size={"w-8"} />
          <h1 className="self-center whitespace-nowrap ml-3 text-violet font-semibold lg:text-headline-medium md:text-headline-medium text-title-large">
            studiumz
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2 sm:space-x-3">
          {/* {user ? (
            <>
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                bordered={false}
                className='w-0 h-0 sm:w-fit sm:h-fit'
              />
              <Dropdown
                className="text-xs sm:text-sm font-bold"
                label={<div>{user.name}</div>}
                outline
                color={'light'}
                // size={"small"}
              >
                <Dropdown.Item>
                  <Link href="/profile">Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/cart">Cart</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/auth/logout" className=" text-red-500">
                    Sign out
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <Button
              className="bg-indigo-500"
              onClick={(e) => router.push('/auth/login')}
            >
              Login
            </Button>
          )} */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {routes.map((route, index) => (
            <Navbar.Link key={index} href={route.path}>
              <button
                className={`flex items-center justify-end space-x-2 transition-all duration-300 ease-in-out`}
              >
                <span className="stroke-current">
                  {route.icon == null ? (
                    <div></div>
                  ) : (
                    <route.icon
                      fill="none"
                      stroke="primary"
                      className="h-5 w-5 mr-1"
                    />
                  )}
                </span>
                {route.name}
              </button>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
