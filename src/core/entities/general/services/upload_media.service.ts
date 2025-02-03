import fetchInstance from "@/core/lib/fetch.config";
import { UploadMediaReqDTO } from "../reqDto/upload_media.dto";
import { endpoints } from "@/data/utils/endpoints";
import { UploadMediaResDTO } from "../resDto/upload_media.dto";

export const uploadMediaService = async (body: UploadMediaReqDTO) => {

    // const res = await fetch(BASE_URL + endpoints.general.uploadMedia(), {
    //     method: "POST",
    //     body
    // })
    // const miyau = await res.json()
    // console.log('res', miyau)
    const res = await fetchInstance<UploadMediaResDTO>({
        endpoint: endpoints.general.uploadMedia(),
        config: {
            method: "POST",
        },
        data: body,
    })

    console.log('res', res)
    if (res.isError) {
        return res;
    }
    return res;
}