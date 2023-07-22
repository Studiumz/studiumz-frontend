import { Button, Modal, Textarea } from "flowbite-react";
import { InvitationModalProps } from "./interface";
import { useState } from "react";

const InvitationModal: React.FC<InvitationModalProps> = ({
  showModal,
  isSend,
  onClose,
  onSend,
}) => {
  const [localIsSend, setLocalIsSend] = useState<boolean>(isSend);
  const handleSend = () => {
    setLocalIsSend((prevIsSend) => !prevIsSend);
    onSend(!localIsSend);
  };
  return (
    <>
      <Modal
        show={showModal}
        className="h-screen my-auto items-screen justify-center"
        onClose={onClose}
      >
        <Modal.Header>
          <h1>Add Your Invitation Message</h1>
        </Modal.Header>
        <Modal.Body>
          <Textarea className="w-full col-span-3 text-base" rows={7} />
          <div className="w-full justify-end flex mt-2">
            <Button className="bg-violet" onClick={handleSend}>
              Send
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InvitationModal;
