import { Res } from "@/data/types/res.type"
import type { PartnersModel } from "../models/partners.model"

export type LandingRepositoryType = {
    getPartners(): Promise<Res<PartnersModel>>
}