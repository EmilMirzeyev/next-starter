import type { Res } from "@/data/types/res.type";
import type { AnnouncementModel } from "../models/announcement.model";
import type { GetAnnouncementByIdModel } from "../models/get_announcement_by_id.model";
import type { SimilarAnnouncementModel } from "../models/get_similar_announcement.model";
import type { AllAnnouncementModel } from "../models/get_all_announcement.model";

export type AnnouncementRepositoryType = {
  createAnnouncement(data: AnnouncementModel): Promise<Res<unknown>>;
  getAnnouncementById(id: number): Promise<Res<GetAnnouncementByIdModel>>;
  getSimilarAnnouncement(id: number): Promise<Res<SimilarAnnouncementModel>>;
  getAllAnnouncement(query: string): Promise<Res<AllAnnouncementModel>>
};
