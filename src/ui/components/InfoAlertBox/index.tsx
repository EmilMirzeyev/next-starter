import { InfoSVG } from "@public/vectors"

const InfoAlertBox = () => {
    return (
        <div className="bg-warning-50 text-warning-600 flex items-center p-2 rounded-[20px] gap-3 text-14px500">
            <InfoSVG />
            Emailiniz spam bölməsini yoxlamağı unutmayın!
        </div>
    )
}

export default InfoAlertBox