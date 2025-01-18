export type GetUserModel = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    }
}

export type GetUsersModel = {
    users: GetUserModel[]
}