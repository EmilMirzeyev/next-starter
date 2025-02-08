import { validator } from "@/core/helpers/validator";
import fetchInstance from "@/core/lib/fetch.config";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";
import { endpoints } from "@/data/utils/endpoints";
import type { ModelsResDTO } from "../resDto/get_models.dto";
import { modelsSchema } from "../schemas/dtoValidations/models.schema";

export const getModelsService = async (id: number) => {
    const res = await fetchInstance<ModelsResDTO>({
        endpoint: endpoints.car.getModels(id),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETMODELS, String(id)],
            },
        },
    });
    if (res.isError) {
        return res;
    }

    return validator({
        schema: modelsSchema,
        endpoint: endpoints.car.getModels(id),
        response: res.data,
    });
};
