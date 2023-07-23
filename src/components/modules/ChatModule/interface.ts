export interface ListOfChats {
    first_user_id: string
    second_user_id: string
    created_at: Date
    deleted_at: null
    last_msg_time: Date
    recipient_email: string
    recipient_name: string
}

export interface FriendsInfo {
    id: string
    first_user_id: string
    second_user_id: string
    created_at: Date
    deleted_at: null
    last_msg_time: Date
    recipient_email: string
    recipient_name: string
}

export interface DetailChat {
    id: string
    recipient_name: string
    recipient_email: string
    messages: Messages[]
}

interface Messages {
    id: string
    chat_id: string
    from_user_id: string
    text: string
    file_url: null
    created_at: Date
    deleted_at: null
}