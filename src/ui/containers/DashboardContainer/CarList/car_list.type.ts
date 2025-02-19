import type { AllAnnouncementModel } from "@/core/entities/announcement/models/get_all_announcement.model";

export type CarListType = {
  carList: { data: AllAnnouncementModel | null };
};
