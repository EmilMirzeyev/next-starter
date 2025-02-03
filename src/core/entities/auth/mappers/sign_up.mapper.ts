import { SignUpModel } from "../models/sign_up.model";
import { SignUpUserReqDTO } from "../reqDto/sign_up_user.dto";

export const SignUpMapper = {
    modelToReqDto: (model: SignUpModel): SignUpUserReqDTO => {
        console.log('SignUpMapper model', model.profile_media_id)
        return {
            role: model.role ?? 1,
            first_name: model.first_name,
            last_name: model.last_name,
            whatsapp_number: model.whatsapp_number,
            phone_numbers: model.phone_numbers,
            birth_date: `${model.year?.name}-${model.month?.name}-${model.day?.name}`,
            address: model.address,
            email: model.email,
            password: model.password,
            password_confirmation: model.password_confirmation,
            profile_media_id: model.profile_media_id,
            id_card_media_ids: model.id_card_media_ids
        }
    }
}