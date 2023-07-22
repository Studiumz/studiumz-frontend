import { useAuthContext } from "@/components";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LoginGuardModal } from "../AuthModule/module-elements/LoginGuardModal";
import axios, { AxiosRequestConfig } from "axios";
import { cfg } from "@/components/config";
import nookies from "nookies";
import { InvitationMessagesProps } from "./interface";
import { RespondeeBubble } from "./module-elements/RespondeeBubble";
import { ResponderBubble } from "./module-elements/ResponderBubble";

export default function ChatModule() {
  const { user, userId, loading } = useAuthContext();
  const [isLoginGuardModal, setIsLoginGuardModal] = useState<boolean>(false);
  const [invitationMessages, setInvitationMessages] = useState<
    InvitationMessagesProps[]
  >([]);
  const [outgoingMessages, setOutgoingMessages] = useState<
    InvitationMessagesProps[]
  >([]);
  const [openInvitationMessage, setOpenInvitationMessage] =
    useState<boolean>(false);
  const [invitationMessageContent, setInvitationMessageContent] =
    useState<InvitationMessagesProps>({
      created_at: "",
      id: "",
      match_status: "PENDING",
      matchee_id: "",
      matcher_id: "",
    });
  const [openConnectionMessage, setOpenConnectionMessage] =
    useState<boolean>(false);

  useEffect(() => {
    if (!loading && !user) {
      setIsLoginGuardModal(true);
    } else {
      getIncomingMatch();
      getOutgoingMatch();
    }
  }, [user, loading]);

  const getIncomingMatch = () => {
    if (!nookies.get().accessToken) {
      // Handle the case where accessToken is missing or invalid
      console.log("Access token missing or invalid.");
      return;
    }

    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${nookies.get().accessToken}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`${cfg.API}/match/incoming`, options)
      .then((res) => {
        // Assuming the response data is an array of objects
        setInvitationMessages(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        // Handle errors gracefully (e.g., display an error message to the user)
        console.log("Error fetching incoming match data:", err);
      });
  };

  const getOutgoingMatch = () => {
    if (!nookies.get().accessToken) {
      // Handle the case where accessToken is missing or invalid
      console.log("Access token missing or invalid.");
      return;
    }

    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${nookies.get().accessToken}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`${cfg.API}/match/outgoing`, options)
      .then((res) => {
        // Assuming the response data is an array of objects
        setInvitationMessages(res.data.data);
      })
      .catch((err) => {
        // Handle errors gracefully (e.g., display an error message to the user)
        console.log("Error fetching incoming match data:", err);
      });
  };

  const handleInvitationChatClick = (message: InvitationMessagesProps) => {
    setOpenInvitationMessage(true);
    setOpenConnectionMessage(false);
    setInvitationMessageContent(message);
  };

  const handleReject = (matchId: string) => {
    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${nookies.get().accessToken}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${cfg.API}/match/reject/${matchId}`, {}, options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // Handle errors gracefully (e.g., display an error message to the user)
        console.log("Error fetching incoming match data:", err);
      });
  };

  const handleAccept = (matchId: string) => {
    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${nookies.get().accessToken}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${cfg.API}/match/accept/${matchId}`, {}, options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // Handle errors gracefully (e.g., display an error message to the user)
        console.log("Error fetching incoming match data:", err);
      });
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/4 w-full px-5 p-5 lg:mt-20 lg:ml-20 mt-24">
          <Card className="mb-5">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Invitations
              </h5>
            </div>
            <div className="flow-root">
              {invitationMessages.length === 0 ? (
                <h1>There is no invitation</h1>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto h-40">
                  {invitationMessages.map((message) => (
                    <li className="py-3 sm:py-4" key={message.id}>
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <div>{/* Content for the avatar */}</div>
                        </div>
                        <div
                          className="min-w-0 flex-1 cursor-pointer"
                          onClick={() => handleInvitationChatClick(message)}
                        >
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {message.matchee_id}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {message.invitation_message}
                          </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                          <div
                            className="p-1 bg-red-500 text-white font-semibold text-sm rounded-md justify-center flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReject(message.id);
                            }}
                          >
                            Reject
                          </div>
                          <div
                            className="p-1 bg-white text-green-500 border-2 border-green-500 font-semibold text-sm rounded-md justify-center flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAccept(message.id);
                            }}
                          >
                            Accept
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Connections
              </h5>
            </div>
            <div className="flow-root">
              {outgoingMessages.length === 0 &&
              invitationMessages.length === 0 ? (
                <h1>There is no messages</h1>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto h-40">
                  {invitationMessages
                    .filter((message) => message.match_status === "ACCEPTED")
                    .map((message) => (
                      <li className="py-3 sm:py-4" key={message.id}>
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <div>{/* Content for the avatar */}</div>
                          </div>
                          <div
                            className="min-w-0 flex-1 cursor-pointer"
                            onClick={() => handleInvitationChatClick(message)}
                          >
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {message.matchee_id}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {message.invitation_message}
                            </p>
                          </div>
                          <div className="flex flex-row gap-x-2">
                            <div
                              className="p-1 bg-red-500 text-white font-semibold text-sm rounded-md justify-center flex items-center"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReject(message.id);
                              }}
                            >
                              Reject
                            </div>
                            <div
                              className="p-1 bg-white text-green-500 border-2 border-green-500 font-semibold text-sm rounded-md justify-center flex items-center"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAccept(message.id);
                              }}
                            >
                              Accept
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  {outgoingMessages.map((message) => (
                    <li className="py-3 sm:py-4" key={message.id}>
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <div>{/* Content for the avatar */}</div>
                        </div>
                        <div
                          className="min-w-0 flex-1 cursor-pointer"
                          onClick={() => handleInvitationChatClick(message)}
                        >
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {message.matchee_id}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {message.invitation_message}
                          </p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                          <div
                            className="p-1 bg-red-500 text-white font-semibold text-sm rounded-md justify-center flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReject(message.id);
                            }}
                          >
                            Reject
                          </div>
                          <div
                            className="p-1 bg-white text-green-500 border-2 border-green-500 font-semibold text-sm rounded-md justify-center flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAccept(message.id);
                            }}
                          >
                            Accept
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Chats */}
        <div className="lg:w-3/4 w-full">
          <div className="flex-1 justify-between flex flex-col h-screen lg:p-20 p-8">
            <div className="flex sm:items-center justify-between border-b-2 border-gray-200">
              <div className="relative flex items-center space-x-4">
                <div className="flex flex-col leading-tight">
                  <div className="text-2xl mt-1 flex items-center">
                    <span className="text-gray-700 mr-3">
                      {openInvitationMessage
                        ? invitationMessageContent.matchee_id
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="messages"
              className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            >
              {openInvitationMessage &&
              invitationMessageContent.invitation_message !== undefined ? (
                <RespondeeBubble
                  message={invitationMessageContent.invitation_message}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
              <div className="relative flex">
                <span className="absolute inset-y-0 flex items-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  placeholder="Write your message!"
                  className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                />
                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-purple-800 hover:bg-purple-400 focus:outline-none"
                  >
                    <span className="font-bold">Send</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 ml-2 transform rotate-90"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginGuardModal
        showModal={isLoginGuardModal}
        onClose={() => setIsLoginGuardModal(false)}
      />
    </>
  );
}
