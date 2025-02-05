import { getPartnersAction } from "@/core/entities/landing/actions/getPartners.action";

export const PartnersVM = async () => {
    const partners = await getPartnersAction();
    return { partners };
};
