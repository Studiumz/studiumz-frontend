export interface InvitationModalProps {
    showModal: boolean;
    isSend: boolean;
    onClose: () => void;
    onSend: (isSend: boolean) => void;
}
  