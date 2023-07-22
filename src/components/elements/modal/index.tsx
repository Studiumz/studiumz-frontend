import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { useState } from "react";

export default function CustomModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <>
      {/* <Button onClick={() => props.setOpenModal("default")}>
        Toggle modal
      </Button> */}
      <FlowbiteModal
      // show={props.openModal === "default"}
      // onClose={() => props.setOpenModal(undefined)}
      >
        <FlowbiteModal.Header>Terms of Service</FlowbiteModal.Header>
        <FlowbiteModal.Body>{/* Modal content goes here */}</FlowbiteModal.Body>
        <FlowbiteModal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </FlowbiteModal.Footer>
      </FlowbiteModal>
      {/* Other JSX content */}
    </>
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
