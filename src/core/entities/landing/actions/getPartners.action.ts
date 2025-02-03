"use server";
import { LandingRepository } from "../repositories";

export const getPartnersAction = async () => {
    return await LandingRepository.getPartners()
}