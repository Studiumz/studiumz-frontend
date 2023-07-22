import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiUserAddFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import InvitationModal from "./module-elements/InvitationModal";
import { useAuthContext } from "@/components";
import { LoginGuardModal } from "../AuthModule/module-elements/LoginGuardModal";
import { getAuth } from "@firebase/auth";
import firebase_app from "@/components/config/firebase";

export const FindModule: React.FC = () => {
  const router = useRouter();
  const { user, userId, loading } = useAuthContext();
  const [changeMatch, setChangeMatch] = useState<boolean>(false);
  const [acceptMatch, setAcceptMatch] = useState<boolean>(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] =
    useState<boolean>(false);
  const [isInvitationModalSend, setIsInvitationModalSend] =
    useState<boolean>(false);
  const [isLoginGuardModal, setIsLoginGuardModal] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && !user) {
      setIsLoginGuardModal(true);
    }
  }, [user, loading]);

  function handleAcceptMatch() {
    setIsInvitationModalOpen(true);
  }

  function handleChangeMatch() {
    setChangeMatch(true);
    setTimeout(() => {
      setChangeMatch(false);
    }, 500);
  }

  const handleSend = (isSendValue: boolean) => {
    setIsInvitationModalSend(isSendValue);
    setIsInvitationModalOpen(false);
    setAcceptMatch(true);
    setTimeout(() => {
      setAcceptMatch(false);
    }, 3000);
  };

  return (
    <>
      <div className="h-screen items-center justify-center w-full flex flex-col">
        {acceptMatch ? (
          <div className="pulse z-10 absolute w-64 h-64 fade-in">
            <h2 className="font-semibold text-headline-medium text-center items-center">
              Match Invitation Has Sent!
            </h2>
          </div>
        ) : (
          <></>
        )}
        <div
          className={`${
            changeMatch
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          } transition-all  transform-none duration-500 [transform-style:preserve-3d] h-[75vh] mt-12 w-[400px] rounded-lg bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')] bg-cover bg-center bg-no-repeat`}
        >
          {" "}
          <div className="bg-gradient-to-t from-violet w-full h-full rounded-lg">
            <div className="flex flex-col h-full justify-end items-start p-6 text-white gap-y-1">
              <div className="flex items-end justify-end gap-x-2">
                <h1 className="text-display-medium font-bold  -mb-3">Nama</h1>
                <h2>Umur</h2>
              </div>

              <div className="flex gap-x-2 items-center justify-center">
                <BsFillPersonFill color="white" />
                <h2>Male</h2>
              </div>
              <div className="flex gap-x-2 items-center justify-center">
                <AiFillHome color="white" />
                <h2>Lives in Jakarta</h2>
              </div>
              <div>
                <h1 className="font-semibold">Struggles</h1>
                <p className="text-label-medium h-32 overflow-y-scroll mr-2 pr-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
                  turpis congue metus porta ullamcorper. Nunc pretium vestibulum
                  dolor, non tincidunt diam feugiat vel. Mauris scelerisque
                  tincidunt dolor, suscipit lacinia sem efficitur pulvinar.
                  Nulla vulputate dignissim velit non tristique. Proin eu
                  viverra lectus. Donec eu vulputate quam. Nunc eget elit ut
                  tortor euismod interdum.
                </p>
              </div>
              <div>
                <h1 className="font-semibold">Interest In</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-28 pt-3">
          <div
            className="p-3 bg-white rounded-full border-2 border-green-500  hover:scale-90 hover:tracking-wider hover:transition-all cursor-pointer items-center justify-center"
            onClick={() => handleAcceptMatch()}
          >
            <RiUserAddFill size="32" className="fill-green-500" color="green" />
          </div>
          <div
            className="p-3 bg-red-500 rounded-full border-2 hover:scale-90 hover:tracking-wider hover:transition-all cursor-pointer items-center justify-center"
            onClick={() => handleChangeMatch()}
          >
            <ImCross
              size="20"
              className="fill-white items-center justify-center w-full h-full px-1.5"
            />
          </div>
        </div>
      </div>
      <InvitationModal
        showModal={isInvitationModalOpen}
        onClose={() => setIsInvitationModalOpen(false)}
        isSend={isInvitationModalSend}
        onSend={handleSend}
      />{" "}
      <LoginGuardModal
        showModal={isLoginGuardModal}
        onClose={() => setIsLoginGuardModal(false)}
      />
    </>
  );
};
