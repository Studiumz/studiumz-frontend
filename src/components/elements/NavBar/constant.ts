import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: AiOutlineHome,
  },
  {
    path: "/find",
    name: "Find Your Peer",
    icon: BiSearchAlt,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: BsFillChatDotsFill,
  },
];
