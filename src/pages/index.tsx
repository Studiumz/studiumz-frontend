import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className={`flex lg:flex-row flex-col z-0 min-h-screen bg-gradient-to-r from-violet to-white opacity-50 items-center justify-center p-24`}
      >
        <div className="lg:w-1/2 w-full flex flex-col justify-start gap-5">
          <h1 className="text-violet text-5xl font-extrabold">Studiumz</h1>
          <h3 className="text-[#808089]">
            Empowering Senior High Networks: Study, Connect, Succeed.
          </h3>
        </div>
        <div className="lg:w-1/2 text-violet w-full text-center flex flex-col justify-center items-center gap-5">
          <h3>Unlock Your Potential Together.</h3>
          <button className="outline outline-offset-2 outline-1 w-48 h-10 rounded-lg decoration-black transform transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80">
            Sign in with Google
          </button>
        </div>
      </main>
    </>
  );
}
