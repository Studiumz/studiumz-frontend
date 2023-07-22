import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { loginGuardModalProps } from "./interface";
import { HiBackspace } from "react-icons/hi";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import { StudiumzLogo } from "@/components/icons/StudiumzLogo";

export const LoginGuardModal: React.FC<loginGuardModalProps> = ({
  onClose,
  showModal,
}) => {
  const router = useRouter();
  return (
    <>
      <Modal show={showModal} size={"md"} className="h-screen">
        <Modal.Body>
          <div className="space-y-3 items-center flex flex-col w-full">
            <StudiumzLogo size={"32"} />
            <h3 className="text-center">
              Please login first to access this feature
            </h3>

            <div className="flex justify-center items-center space-x-3">
              <Button
                className="bg-violet text-white"
                color="violet"
                onClick={() => {
                  router.push("/auth/login");
                }}
                rightIcon={<BiSolidLogInCircle />}
              >
                <h4>Log In</h4>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
