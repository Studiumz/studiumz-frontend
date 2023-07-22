export interface InvitationMessagesProps {
  created_at: string;
  deleted_at?: string;
  id: string;
  invitation_message?: string;
  match_status: "PENDING" | "SKIPPED" | "REJECTED" | "ACCEPTED";
  matchee_id: string;
  matcher_id: string;
}
