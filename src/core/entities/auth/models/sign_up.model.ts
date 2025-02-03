export type SignUpModel = {
    role: number | null;
    first_name: string;
    last_name: string;
    whatsapp_number: string;
    phone_numbers: {
        phone_number: string
    }[];
    day: { id: number, name: string } | null;
    month: { id: number, name: string } | null;
    year: { id: number, name: string } | null;
    address: string;
    identity_images: File[];
    profile_image: File[];
    email: string;
    password: string;
    password_confirmation: string;
    profile_media_id: number | null;
    id_card_media_ids: number[];
}
