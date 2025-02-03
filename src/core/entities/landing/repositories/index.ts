import { getPartnersService } from "../services/get_partners.service";
import type { LandingRepositoryType } from "./landing.repository.type";

export const LandingRepository: LandingRepositoryType = {
    async getPartners() {
        return await getPartnersService()
    },
}