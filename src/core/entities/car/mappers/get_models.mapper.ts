import type { ModelsModel } from "../models/get_models.model";
import type { ModelsResDTO } from "../resDto/get_models.dto";

export const getModelsMapper = {
    resDtoToModel: (dto: ModelsResDTO): ModelsModel => {
        return {
            data: dto.data.map((model) => ({
                id: model.id,
                name: model.name
            }))
        }
    }
}