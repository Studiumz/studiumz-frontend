import React from "react";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { routes } from "./constant";
import { useRouter } from "next/router";
import { StudiumzLogo } from "../../icons/StudiumzLogo";
import { useAuthContext } from "@/components";
import Link from "next/link";
import { getAuth } from "@firebase/auth";
import firebase_app from "@/components/config/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nookies, { destroyCookie } from "nookies";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  return (
    <>
      <Navbar
        rounded={true}
        className="fixed flex w-full justify-between px-[0.15rem] sm:px-5 py-3 z-50 shadow-md"
      >
        <Navbar.Brand href="/">
          <StudiumzLogo size={"w-8"} />
          <h1 className="self-center whitespace-nowrap ml-3 text-violet font-semibold lg:text-headline-medium md:text-headline-medium text-title-medium">
            studiumz
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2 sm:space-x-3">
          {user ? (
            <>
            <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img={user.photoURL ? user.photoURL : ""}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
            </Dropdown.Header>
            <Navbar.Link
                  href="/"
                  onClick={async () => {
                    await getAuth(firebase_app)
                      .signOut()
                      .then(() => {
                        destroyCookie(undefined, "accessToken");
                        destroyCookie(undefined, "idToken");
                        router.push("/");
                        toast.success("Successfully Sign Out.");
                      });
                  }}
                >
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Navbar.Link>            
          </Dropdown>
            </>
          ) : (
            <Button
              className="bg-indigo-500"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          )}
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
