import { getUserByIdMapper } from "../mappers/get_user_by_id.mapper";
import { getUsersMapper } from "../mappers/get_users.mapper";
import { createUserService } from "../services/create_user.service";
import { deleteUserService } from "../services/delete_user.service";
import { getUserByIdService } from "../services/get_user_by_id.service";
import { getUsersService } from "../services/get_users.service";
import { UserRepositoryType } from "./user.repository.type";

export const UserRepository: UserRepositoryType = {
    async getUsers(query) {
        const users = await getUsersService(query)
        if (users.isError) {
            return users
        }
        console.log('users repo', users)
        const mappedUsers = users.data.map(getUsersMapper.resDtoToModel)
        return Object.assign(users, { data: mappedUsers })
    },
    async getUserById(id) {
        const user = await getUserByIdService(id)
        if (user.isError) {
            return user
        }
        const mappedUser = getUserByIdMapper.resDtoToModel(user.data)
        return Object.assign(user, { data: mappedUser })
    },
    async createUser(data) {
        return await createUserService(data)
    },
    async deleteUser(id) {
        return await deleteUserService(id)
    }
}