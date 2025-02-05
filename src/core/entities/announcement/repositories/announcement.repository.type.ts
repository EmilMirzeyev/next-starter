import { Res } from "@/data/types/res.type"
import type { AnnouncementModel } from "../models/announcement.model"

export type AnnouncementRepositoryType = {
    createAnnouncement(data: AnnouncementModel): Promise<Res<unknown>>
}