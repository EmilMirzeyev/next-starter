export type SignUpActionModel = {
    name: string;
    media_id: number;
};

export type MediaSliceType = {
    signup: {
        profile_media_id: number | null;
        id_card_media_ids: number[];
    };
};
