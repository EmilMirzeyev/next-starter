"use client";
import InfoAlertBox from "@/ui/components/InfoAlertBox";
import Form from "@/ui/shared/Form";
import OtpInput from "react-otp-input";
import { cn } from "@/core/utils/cn";
import Button from "@/ui/shared/Button";
import { ArrowRightSVG, SuccessModalSVG } from "@public/vectors";
import Modal from "@/ui/shared/Modal";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { OTPSignUpFormVM } from "./otp_sign_up.form.vm";
import {
    CountdownCircleTimer,
    useCountdown,
} from "react-countdown-circle-timer";
import { useState } from "react";
import SuccessModal from "@/ui/components/SuccessModal";

const OTPSignUpForm = () => {
    const {
        methods,
        submitHandler,
        otp,
        isOtpComplete,
        setOtp,
        successModalVisible,
        setSuccessModalVisible,
    } = OTPSignUpFormVM();

    const { remainingTime } = useCountdown({
        duration: 5,
        colors: "#abc",
    });

    const [key, setKey] = useState(0);

    const formatTime = (remainingTime: number) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
            }`;
    };

    const handleRetry = () => {
        setKey((prevKey) => prevKey + 1);
        console.log("retry");
    };

    return (
        <>
            <Form
                methods={methods}
                onSubmit={submitHandler}
                className="flex flex-col gap-y-8"
            >
                <InfoAlertBox />
                <OtpInput
                    value={otp}
                    inputType="tel"
                    onChange={setOtp}
                    numInputs={6}
                    shouldAutoFocus
                    renderSeparator={<span className="mx-2"></span>}
                    renderInput={(props) => (
                        <input
                            {...props}
                            className={cn(
                                "rounded-lg !w-full text-36px700 border text-gray-600 !h-16",
                                props.value ? "border-gray-600" : "border-gray-300",
                                isOtpComplete && "border-success-600 text-success-600"
                            )}
                        />
                    )}
                />
                <div className="flex justify-center">
                    {key === 0 || key > 0 ? (
                        <div className="flex items-center gap-x-2">
                            <CountdownCircleTimer
                                key={key}
                                size={28}
                                strokeWidth={4}
                                isPlaying
                                duration={5}
                                colors={["#C60F16", "#F7B801"]}
                                colorsTime={[4, 5]}
                                onComplete={() => setKey(-1)}
                            ></CountdownCircleTimer>
                            <p className="text-brand-500 text-14px500">
                                {formatTime(remainingTime)}
                            </p>
                            <h3 className="text-gray-800 text-14px500">
                                Sonra təkrar cəhd edə bilərsiniz
                            </h3>
                        </div>
                    ) : (
                        <div className="flex justify-center gap-x-2">
                            <h3 className="text-gray-800 text-14px500">
                                Şifrə hələdə gəlməyib?
                            </h3>
                            <button
                                type="button"
                                onClick={handleRetry}
                                className="border-b border-brand-500 text-brand-500 leading-none mb-2 mt-0.5 text-14px500"
                            >
                                Yenidən göndər
                            </button>
                        </div>
                    )}
                </div>

                <Button
                    disabled={!isOtpComplete}
                    className="rounded-[28px] flex gap-x-2.5"
                >
                    Qeydiyyatı tamamla
                    <ArrowRightSVG stroke={!isOtpComplete ? "#475467" : "#fff"} />
                </Button>
            </Form>
            <SuccessModal
                link="/"
                title="Qeydiyyatınız tamamlandı"
                buttonText="Əsas səhifəyə keçid"
                description="Müraciətiniz operatorlarımız tərəfindən baxılıb təsdiqləndikdən
                        sonra sistemə daxil ola bilərsiniz. Təsdiqləndiyi zaman sizə email
                        göndəriləcək"
                visible={successModalVisible}
                setVisible={setSuccessModalVisible}
            />
        </>
    );
};

export default OTPSignUpForm;
