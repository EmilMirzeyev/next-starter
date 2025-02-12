import { AnnouncementModel } from "./get_similar_announcement.model";

type LinksModel = {
    first: string;
    last: string;
    prev: null;
    next: null;
};

type MetaModel = {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinkModel[];
    path: string;
    per_page: number;
    to: number;
    total: number;
};

type MetaLinkModel = {
    url: string | null;
    label: string;
    active: boolean;
};

export type AllAnnouncementModel = {
    data: AnnouncementModel[];
    links: LinksModel;
    meta: MetaModel;
};
