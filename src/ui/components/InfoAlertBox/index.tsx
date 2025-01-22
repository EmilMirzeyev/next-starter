import { InfoSVG } from "@public/vectors"

const InfoAlertBox = ({ description }: { description: string }) => {
    return (
        <div className="bg-warning-50 text-warning-600 flex items-center p-2 rounded-[20px] gap-3 text-14px500">
            <InfoSVG />
            {description}
        </div>
    )
}

export default InfoAlertBox