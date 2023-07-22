import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { useState } from "react";

export default function CustomModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <>
      <div className="w-full z-50  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 flex items-center text-red-500 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
            <p className="text-sm text-gray-500 px-8">
              Do you really want to delete your account? This process cannot be
              undone
            </p>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
              Cancel
            </button>
            <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {/* <Button onClick={() => props.setOpenModal("default")}>
    //     Toggle modal
    //   </Button> */}
    //   <FlowbiteModal
    //   // show={props.openModal === "default"}
    //   // onClose={() => props.setOpenModal(undefined)}
    //   >
    //     <FlowbiteModal.Header>Terms of Service</FlowbiteModal.Header>
    //     <FlowbiteModal.Body>{/* Modal content goes here */}</FlowbiteModal.Body>
    //     <FlowbiteModal.Footer>
    //       <Button onClick={() => props.setOpenModal(undefined)}>
    //         I accept
    //       </Button>
    //       <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
    //         Decline
    //       </Button>
    //     </FlowbiteModal.Footer>
    //   </FlowbiteModal>
    //   {/* Other JSX content */}
    // </>
  );
}

{
  /* <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer> */
}
{
  /* <div className={`fixed inset-0 flex items-center justify-center z-50`}>
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
      </div> */
}
