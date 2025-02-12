import { z } from "zod";
import { announcementSchema } from "./get_similar_announcement.schema";

const linksSchema = z.object({
    first: z.string(),
    last: z.string(),
    prev: z.null(),
    next: z.null(),
});

const metaLinkSchema = z.object({
    url: z.string().nullable(),
    label: z.string(),
    active: z.boolean(),
});

const metaSchema = z.object({
    current_page: z.number(),
    from: z.number(),
    last_page: z.number(),
    links: z.array(metaLinkSchema),
    path: z.string(),
    per_page: z.number(),
    to: z.number(),
    total: z.number(),
});

export const allAnnouncementSchema = z.object({
    data: z.array(announcementSchema),
    links: linksSchema,
    meta: metaSchema
})