import { GetUserModel } from "../models/get_users.model";
import { UsersRestDTO } from "../resDto/get_users.dto";

export const getUsersMapper = {
    resDtoToModel: (dto: UsersRestDTO): GetUserModel => {
        return {
            id: dto.id,
            name: dto.name,
            username: dto.username,
            email: dto.email,
            address: {
                street: dto.address.street,
                city: dto.address.city,
            }
        }
    }
}