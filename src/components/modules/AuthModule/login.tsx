import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import Link from "next/link";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import firebase_app from "@/components/config/firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { AxiosRequestConfig } from "axios";
import { cfg } from "@/components/config";
export const LoginModule: React.FC = () => {
  const auth = getAuth(firebase_app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleLogIn = async () => {
    const result = await signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Successfully Log In.");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`flex lg:flex-row flex-col min-h-screen rounded-lg bg-gradient-to-r from-white via-white to-violet bg-opacity-10 items-center justify-center p-24 text-black`}
    >
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-wrap">
          <StudiumzLogo size={"w-20"} />
          <h1 className="text-violet text-5xl font-extrabold">Studiumz</h1>
        </div>
        <h3 className="text-[#808089] text-2xl ml-20">
          Empowering Senior High Networks: <br />
          <p className="font-bold">Study, Connect, Succeed.</p>
        </h3>
      </div>
      <div className="w-1/2 text-center flex flex-col justify-end items-center gap-5">
        <h3 className="text-purple-800 text-xl">
          Unlock Your Potential Together.
        </h3>
        <a>
          <button
            className="flex bg-white justify-center items-center gap-2 outline outline-offset-2 outline-1 w-48 h-10 rounded-lg decoration-black transform transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
            onClick={handleLogIn}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.575 10.225C19.575 9.56665 19.5167 8.94165 19.4167 8.33331H10V12.0916H15.3917C15.15 13.325 14.4417 14.3666 13.3917 15.075V17.575H16.6083C18.4917 15.8333 19.575 13.2666 19.575 10.225Z"
                fill="#4285F4"
              />
              <path
                d="M9.99995 20C12.7 20 14.9583 19.1 16.6083 17.575L13.3916 15.075C12.4916 15.675 11.35 16.0417 9.99995 16.0417C7.39162 16.0417 5.18329 14.2833 4.39162 11.9083H1.07495V14.4833C2.71662 17.75 6.09162 20 9.99995 20Z"
                fill="#34A853"
              />
              <path
                d="M4.39167 11.9083C4.18333 11.3083 4.075 10.6667 4.075 9.99999C4.075 9.33333 4.19167 8.69166 4.39167 8.09166V5.51666H1.075C0.391666 6.86666 0 8.38333 0 9.99999C0 11.6167 0.391666 13.1333 1.075 14.4833L4.39167 11.9083Z"
                fill="#FBBC05"
              />
              <path
                d="M9.99995 3.95833C11.475 3.95833 12.7916 4.46667 13.8333 5.45834L16.6833 2.60833C14.9583 0.991668 12.7 0 9.99995 0C6.09162 0 2.71662 2.25 1.07495 5.51667L4.39162 8.09167C5.18329 5.71667 7.39162 3.95833 9.99995 3.95833Z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
};
