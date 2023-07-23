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
import { CardModule } from "../CardModule";
import axios, { AxiosRequestConfig } from "axios";
import { cfg } from "@/components/config";
import nookies from "nookies";
import { RecommendationProps } from "./interface";

export const FindModule: React.FC = () => {
  const router = useRouter();
  const { user, userId, loading, accessToken } = useAuthContext();
  const [changeMatch, setChangeMatch] = useState<boolean>(false);
  const [acceptMatch, setAcceptMatch] = useState<boolean>(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] =
    useState<boolean>(false);
  const [isInvitationModalSend, setIsInvitationModalSend] =
    useState<boolean>(false);
  const [isLoginGuardModal, setIsLoginGuardModal] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<
    RecommendationProps[] | null
  >(null);
  const [pointer, setPointer] = useState<number>(0);
  useEffect(() => {
    if (!loading && !user) {
      setIsLoginGuardModal(true);
    } else {
      getRecommendation();
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

  const getRecommendation = () => {
    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${nookies.get().accessToken}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`${cfg.API}/recommendation/`, options)
      .then((res) => {
        setRecommendation(res.data.data);
      })
      .catch((err) => {
        // Handle errors gracefully (e.g., display an error message to the user)
        console.log("Error fetching incoming match data:", err);
      });
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
        {recommendation && recommendation?.length === 0 ? <></> :
        <div
          className={`${
            changeMatch
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          } transition-all transform-none duration-500 [transform-style:preserve-3d] lg:h-[75vh] mt-12 lg:w-[400px] h-screen rounded-lg`}
        >
          <div className="bg-gradient-to-t from-violet to-blue-200 w-full h-full rounded-lg relative">
            <div className="text-[300px] absolute inset-0 flex items-center justify-center font-bold z-2 text-white text-opacity-50">
            M
            </div>
            <div className="flex flex-col h-full justify-end items-start p-6 text-white gap-y-1 absolute z-1">
              <div className="flex items-end justify-end gap-x-2">
                <h1 className="text-display-medium font-bold -mb-3">            {recommendation && recommendation[pointer].nickname ? recommendation[pointer].nickname : ""}</h1>
              </div>

              <div className="flex gap-x-2 items-center justify-center">
                <BsFillPersonFill color="white" />
                <h2>Male</h2>
              </div>
              <div>
                <h1 className="font-semibold">Struggles</h1>
                <p className="text-sm h-32 overflow-y-scroll mr-2 pr-2 mt-2">
                  I find it challenging to grasp certain mathematical concepts,
                  which can lead to confusion and frustration. Honestly, I never
                  saw the point of some math topics. Like, why do I need to
                  learn calculus if I'm not going to be an engineer or a
                  scientist? It felt like I was studying things that I'd never
                  use outside of the classroom.
                </p>
              </div>
              <div>
                <h1 className="font-semibold mt-2">Interest In</h1>
                <div className="w-full grid grid-cols-3 gap-2 mt-2">
                  <div className="px-5 bg-white text-violet rounded-full items-center justify-center flex text-md">
                    Physics
                  </div>
                  <div className="px-5 bg-white text-violet rounded-full items-center justify-center flex text-md">
                    Math
                  </div>
                  <div className="px-5 bg-white text-violet rounded-full items-center justify-center flex text-md">
                    Chemistry
                  </div>
                  <div className="px-5 bg-white text-violet rounded-full items-center justify-center flex text-md">
                    Biology
                  </div>
                  <div className="px-5 bg-white text-violet rounded-full items-center justify-center flex text-md">
                    Statistic
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        }
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
