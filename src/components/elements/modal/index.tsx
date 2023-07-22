import { StudiumzLogo } from "@/components/icons/StudiumzLogo";

export default function Modal() {
  return (
    <>
      <div className={`fixed inset-0 flex items-center justify-center z-50`}>
        <div className="flex flex-col justify-center items-center gap-5 bg-white w-1/2 p-4 rounded-xl shadow-lg text-center">
          <StudiumzLogo size={"w-24"} />
          <h2 className="text-xl text-violet">Welcome to Studiumz!</h2>
          <p className="text-[#808089]">
            This app connects users with study peers based on <br /> shared
            interests, subjects, and study preferences.
          </p>

          <div className="flex flex-col items-start text-violet">
            <h4 className="font-bold">Profile Setup</h4>
            <h4 className="font-bold">Interests and Subjects</h4>
            <h4 className="font-bold">Swipe Feature</h4>
            <h4 className="font-bold">Chat and Communication</h4>
            <h4 className="font-bold">Study Goals and Progress</h4>
            <h4 className="font-bold">Privacy and Data Protection</h4>
          </div>

          <button
            type="button"
            className="text-white bg-violet hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
