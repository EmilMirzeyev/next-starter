"use client";
import Form from "@/ui/shared/Form"
import { IncreaseBalanceFormVM } from "./increase_balance.form.vm"
import Input from "@/ui/shared/Input"
import Button from "@/ui/shared/Button"
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum"
import { PlusSVG, Wallet2SVG } from "@public/vectors"
import Profile3Image from '@public/images/profile3.png'
import Image from "next/image"
import WalletImage from "@public/images/wallet 1.png"

const IncreaseBalanceForm = () => {
    const { methods, submitHandler } = IncreaseBalanceFormVM()

    return (
        <div className="border border-gray-200 flex justify-between p-3 rounded-[40px] bg-white h-20">
            <div className="flex gap-x-3 items-center">
                <Image alt="profile image" src={Profile3Image} />
                <div className="flex flex-col gap-y-1">
                    <h2 className="text-gray-900 text-20px600">Cybrary Cars</h2>
                    <p className="text-gray-500 text-12px400">Avtosalon</p>
                </div>
            </div>
            <div className="flex gap-x-4 items-center">
                <div className="flex items-center gap-x-1.5 bg-gray-100 border-2 border-gray-100 px-4 py-2 rounded-[28px]">
                    <Image src={WalletImage} alt="Wallet" className="size-10" />
                    <h3 className="text-18px400 text-black flex items-center gap-x-1">
                        Balans:
                        <p className="text-black text-18px700">0 AZN</p>
                    </h3>
                </div>
                <Form methods={methods} onSubmit={submitHandler} className="flex gap-x-4 items-center">
                    <Input name='increaseBalance' placeholder="Məbləği daxil edin..." />
                    <Button type="submit" variant={ButtonVariantsEnum.BLACK} className="rounded-[28px] w-full">
                        Balansı artır
                        <PlusSVG storke="#fff" />
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default IncreaseBalanceForm
