import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const FindModule: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen items-center justify-center w-full flex">
        <div className="h-[80vh] mt-12 w-[400px] rounded-lg bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')] bg-cover bg-center bg-no-repeat">
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
                  tortor euismod interdum. Nam scelerisque justo interdum,
                  placerat purus congue, tempus magna. Curabitur gravida sapien
                  nisl, sit amet ullamcorper neque hendrerit vitae. Praesent
                  nunc sapien, sollicitudin vel congue nec, laoreet id neque.
                  Vivamus at quam eget turpis pretium pulvinar. Pellentesque
                  mollis, lectus consectetur ornare vulputate, ante libero
                  congue mi, et viverra sapien nisi sit amet nulla. Curabitur
                  feugiat eu magna nec molestie.
                </p>
              </div>
              <div>
                <h1>Interest In</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        {/* <div className="group h-[148px] w-[312px] items-center justify-center lg:h-[80vh] lg:w-[592px] mt-12">
          <div
            className="flex flex-row items-start justify-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          >
            <div
              className="absolute inset-0  h-[80vh] w-[310px] bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')] bg-cover bg-center bg-no-repeat lg:h-[80vh] lg:w-[587px] lg:bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')]"
            ></div>
            <div
              className="absolute inset-0  h-[80vh] w-[310px] bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')] bg-cover bg-center bg-no-repeat [backface-visibility:hidden] [transform:rotateY(180deg)]  lg:h-[80vh] lg:w-[587px] lg:bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80')]"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-3">
                <div className="flex w-[280px] flex-wrap items-center justify-center text-center font-poppins text-body-small text-background-light lg:w-[392px] lg:text-title-large">
                  Permainan interaktif menggunakan beberapa barcode berisi tantangan berhadiah yang disebar di lingkungan Fasilkom
                </div>
                <div className="flex gap-2">
                  <Button
                    className="w-fit rounded-md px-4 py-2 text-[8px] lg:rounded-lg lg:px-5 lg:py-3 lg:text-label-medium"
                    variant={1}
                    onClick={() => {
                      router.push('/scan-me');
                    }}
                  >
                    PLAY NOW
                  </Button>
                  <Button
                    className="w-fit rounded-md px-4 py-2 text-[8px] lg:rounded-lg lg:px-5 lg:py-3 lg:text-label-medium"
                    variant={2}
                    onClick={() => {
                      router.push('/scan-me/how-to-play');
                    }}
                  >
                    Cara Bermain
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <TicketDesign name="Scan Me" />
          </div>
        </div> */}
      </div>
    </>
  );
};
