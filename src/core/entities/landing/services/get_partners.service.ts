import { validator } from "@/core/helpers/validator";
import fetchInstance from "@/core/lib/fetch.config";
import { endpoints } from "@/data/utils/endpoints";
import type { PartnersResDTO } from "../resDto/partners.dto";
import { partnersSchema } from "../schemas/dtoValidations/partners.schema";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";

export const getPartnersService = async () => {
    const res = await fetchInstance<PartnersResDTO>({
        endpoint: endpoints.landing.getPartners(),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETPARTNERS],
            },
        },
    });
    if (res.isError) {
        return res;
    }
    return validator({
        schema: partnersSchema,
        endpoint: endpoints.landing.getPartners(),
        response: res.data,
    });
};
