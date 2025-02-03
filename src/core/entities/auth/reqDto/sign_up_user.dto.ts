export type SignUpUserReqDTO = {
    role: number;
    first_name: string;
    last_name: string;
    whatsapp_number: string;
    birth_date: string;
    address: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone_numbers: { phone_number: string }[];
    profile_media_id: number;
    id_card_media_ids: number[];
};
