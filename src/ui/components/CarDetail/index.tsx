"use client";
import { cn } from "@/core/utils/cn";
import { CardDetailVM } from "./card_detail.vm";
import Link from "next/link";
import {
    ArrowRightSVG,
    CalendarSVG,
    Eye2SVG,
    HashSVG,
    Heart2SVG,
    InfoCircleSVG,
    PhoneCallSVG,
    ReceiptCheckSVG,
    Refresh5SVG,
    ShareSVG,
    Star2SVG,
    Whatsapp2SVG,
} from "@public/vectors";
import Image from "next/image";
import UserImage from "@public/images/user.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// import "yet-another-react-lightbox/plugins/counter.css";
import { Thumbnails, Inline } from "yet-another-react-lightbox/plugins";
import { slides } from "./data";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import WhatsappImage from '@public/images/whatsapp.png'

const CarDetail = () => {
    const { isExpanded, open, index, setIsExpanded, toggleOpen, updateIndex } =
        CardDetailVM();

    return (
        <section className="flex flex-col gap-y-6">
            <div className="border border-gray-300 p-3 pl-5 rounded-2xl flex justify-between items-center">
                <h2 className="text-gray-950 text-24px700">
                    Ford - Fusion Titanium, 2020, 2.0 L, 99 000 km
                </h2>
                <button className="flex items-center gap-x-1 text-gray-950 text-14px600 py-2 px-3 hover:bg-gray-50 transition-all ease-in-out rounded-xl">
                    Yadda saxla
                    <Heart2SVG />
                </button>
            </div>
            <div className="flex gap-x-6 relative">
                <div className="flex flex-col gap-y-5">
                    <div className="">
                        <Lightbox
                            index={index}
                            slides={slides}
                            plugins={[Inline, Thumbnails]}
                            on={{
                                view: updateIndex,
                                click: toggleOpen(true),
                            }}
                            carousel={{
                                padding: 0,
                                spacing: 0,
                                imageFit: "cover",
                            }}
                            inline={{
                                style: {
                                    width: "100%",
                                    maxWidth: "710px",
                                    aspectRatio: "3 / 2",
                                },
                            }}
                            thumbnails={{
                                position: "bottom",
                                width: 96,
                                height: 80,
                                gap: 10,
                                imageFit: "cover",
                                border: 0,
                            }}
                            styles={{
                                container: {
                                    borderRadius: "16px",
                                },
                                thumbnail: {
                                    backgroundColor: "transparent",
                                    padding: "0",
                                    border: "none",
                                    boxShadow: "none",
                                    outline: "none",
                                    borderRadius: "8px",
                                },
                                thumbnailsContainer: {
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    marginTop: "20px",
                                    paddingLeft: "10px",
                                },
                                thumbnailsTrack: {
                                    boxShadow: "none",
                                },
                                button: {
                                    transition: "transform 0.3s ease, background-color 0.3s ease",
                                    background: "#121926A3",
                                    borderRadius: "33px",
                                    height: "48px",
                                    width: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "20px",
                                    marginLeft: "20px",
                                },
                            }}
                        />
                        <Lightbox
                            open={open}
                            close={toggleOpen(false)}
                            index={index}
                            slides={slides}
                            on={{ view: updateIndex }}
                            animation={{ fade: 0 }}
                            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
                        />
                    </div>
                    <article className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-y-6">
                        <h2 className="text-gray-800 text-24px600">
                            Avtomobilin göstəriciləri
                        </h2>
                        <div className="flex justify-between gap-x-8">
                            <ul className="w-1/2 flex flex-col gap-y-2">
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Şəhər</h3>
                                    <p className="text-gray-800 text-16px500">Bakı</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Marka</h3>
                                    <p className="text-gray-800 text-16px500">Ford</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Model</h3>
                                    <p className="text-gray-800 text-16px500">Fusion Titanium</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Ban növü</h3>
                                    <p className="text-gray-800 text-16px500">Sedan</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Buraxılış ili</h3>
                                    <p className="text-gray-800 text-16px500">2020</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Rəngi</h3>
                                    <p className="text-gray-800 text-16px500">Boz</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Mühərriki</h3>
                                    <p className="text-gray-800 text-16px500">
                                        2.0 L / 245 a.g. / Benzin
                                    </p>
                                </li>
                            </ul>
                            <ul className="w-1/2 flex flex-col gap-y-2">
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Yürüş</h3>
                                    <p className="text-gray-800 text-16px500">99 000 km</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">
                                        Sürətlər qutusu
                                    </h3>
                                    <p className="text-gray-800 text-16px500">Variator</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Ötürücü</h3>
                                    <p className="text-gray-800 text-16px500">Ön</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Vəziyyəti</h3>
                                    <p className="text-gray-800 text-16px500">Sürülmüş</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">Yerlərin sayı</h3>
                                    <p className="text-gray-800 text-16px500">5</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">
                                        Sahiblərinin sayı
                                    </h3>
                                    <p className="text-gray-800 text-16px500">1</p>
                                </li>
                                <li className="flex items-center justify-between">
                                    <h3 className="text-gray-500 text-14px400">
                                        Hansı bazar üçün yığılıb
                                    </h3>
                                    <p className="text-gray-800 text-16px500">Amerika</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-x-3">
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Rənglənməyib
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Vuruğu yoxdur
                            </span>
                        </div>
                    </article>
                    <article className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-y-6">
                        <h2 className="text-gray-800 text-24px600">Ətraflı məlumat</h2>
                        <div>
                            <p
                                className={cn(
                                    "transition-all duration-300 ease-in-out",
                                    isExpanded
                                        ? "line-clamp-none opacity-100"
                                        : "line-clamp-3 opacity-80"
                                )}
                            >
                                2020 model Ford Fusion Titanium ideal vəziyyətdədir! 2.0L
                                EcoBoost mühərriki, 245 at gücü, tam ötürücülü (AWD)
                                transmissiya ilə təchiz olunmuşdur. Full paket: dəri salon,
                                adaptiv kruiz-kontrol, Apple CarPlay/Android Auto dəstəyi, 12
                                dinamikli premium səs sistemi və panorama lyuk mövcuddur. Yürüş:
                                45,000 km. Avtomobilin həm estetik, həm də texniki baxımdan heç
                                bir problemi yoxdur. Nağd və ya ilkin ödənişsiz kreditlə əldə
                                etmək mümkündür. 1 il zəmanət və bank yolu ilə sərfəli şərtlər
                                təklif olunur. Ətraflı məlumat və test sürüşü üçün əlaqə
                                saxlayın!
                            </p>
                            <button
                                onClick={() => setIsExpanded((prev) => !prev)}
                                className="text-blue-700 text-16px400 underline underline-offset-2 flex"
                            >
                                {isExpanded ? "Gizlət" : "Davamını oxu"}
                            </button>
                        </div>
                    </article>
                    <article className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-y-6">
                        <h2 className="text-gray-800 text-24px600">
                            Avtomobilin təchizatı
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Yüngül lehimli disklər
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                ABS
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Lyuk
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Mərkəzi qapanma
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Yağış sensoru
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Yan pərdələr
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Ksenon lampalar
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Park radarı
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Dəri salon
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Oturacaqların ventilyasiyası
                            </span>
                            <span className="text-gray-800 text-16px500 bg-gray-200 py-2.5 px-3.5 rounded-xl w-fit">
                                Arxa görüntü kamerası
                            </span>
                        </div>
                    </article>
                </div>
                <div className="min-w-[360px] flex flex-col gap-y-5  sticky top-0 h-full">
                    <div className="p-5 rounded-[20px] border border-gray-200 flex flex-col gap-y-5">
                        <h2 className="text-gray-800 text-32px800">26 500 AZN</h2>
                        <div className="text-brand-600 text-16px600  py-2.5 px-3.5 bg-brand-50 rounded-xl flex justify-center gap-x-1 items-center">
                            Sifarişlə
                            <ReceiptCheckSVG />
                        </div>
                    </div>
                    <div className="p-5 rounded-[20px] border border-gray-200 flex flex-col gap-y-5">
                        <button className="bg-success-500 text-white rounded-[28px] h-14 flex flex-col justify-center items-center">
                            <h3 className="text-12px500">Nömrəni göstər</h3>
                            <div className="flex items-center gap-x-2">
                                <PhoneCallSVG />
                                <p className="text-16px700">+994 01 234 ** **</p>
                            </div>
                        </button>
                        <Link
                            href={""}
                            className="rounded-[28px] border h-14 border-success-600 bg-success-50 text-success-600 text-15px600 flex justify-center items-center gap-x-1"
                        >
                            <Image src={WhatsappImage} alt="Whatsapp" />
                            Whatsapp-da yaz
                        </Link>
                    </div>
                    <div className="flex gap-x-3">
                        <button className="flex justify-center w-1/2 gap-x-1.5 bg-brand-50 border-2 border-brand-50 text-brand-600 text-16px600 rounded-[22px] px-4 py-2.5">
                            Elanı reklam et
                            <Star2SVG />
                        </button>
                        <button className="flex justify-center gap-x-1.5 items-center w-1/2 bg-gray-950 text-white text-16px600 rounded-[22px] px-4 py-2.5">
                            Barter təklif et
                            <Refresh5SVG className="text-white" />
                        </button>
                    </div>
                    <div className="p-5 rounded-[20px] border border-gray-200 flex flex-col gap-y-5">
                        <div className="flex gap-x-3 justify-between items-center">
                            <div className="flex gap-x-3">
                                <Image src={UserImage} alt="user image" />
                                <div>
                                    <h3 className="text-16px500">Elnur Mobile</h3>
                                    <p className="text-brand-500 text-14px400 underline underline-offset-[3px]">
                                        42 elan
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-500 rounded-md px-2 py-1 text-white text-12px600">
                                Avtosalon
                            </div>
                        </div>
                        <Link href={''} className="w-full flex">
                            <Button variant={ButtonVariantsEnum.BLACK} className="rounded-[28px] flex gap-x-2.5 items-center w-full">
                                Digər elanlarına bax
                                <ArrowRightSVG />
                            </Button>
                        </Link>
                    </div>

                    {/* <div className="bg-gray-100 border border-gray-100 px-5 py-3 rounded-2xl flex items-center gap-x-3 underline-offset-[3px]">
                        <h3 className="text-16px400">Elanın nömrəsi:</h3>
                        <p className="text-brand-500 text-14px600 underline">#156415</p>
                    </div> */}
                    <div className="flex justify- gap-x-3">
                        <div className="flex flex-col gap-y-2 border border-gray-200 rounded-xl min-w-[112px] p-4">
                            <div className="bg-gray-200 rounded-xl w-fit p-1"><HashSVG /></div>
                            <div className="">
                                <h3 className="text-gray-600 text-12px400">Elan nömrəsi</h3>
                                <p className="text-gray-800 text-14px500">#66687</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 border border-gray-200 rounded-xl min-w-[112px] p-4">
                            <div className="bg-gray-200 rounded-xl w-fit p-1">
                                <Eye2SVG />
                            </div>
                            <div className="">
                                <h3 className="text-gray-600 text-12px400">Baxış sayı</h3>
                                <p className="text-gray-800 text-14px500">74</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 border border-gray-200 rounded-xl min-w-[112px] p-4">
                            <div className="bg-gray-200 rounded-xl w-fit p-1"><CalendarSVG /></div>
                            <div className="">
                                <h3 className="text-gray-600 text-12px400">Yeniləndi</h3>
                                <p className="text-gray-800 text-14px500">01.20.2025</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <button
                            className="rounded-[22px] w-1/2 border border-gray-200 flex justify-center px-4 py-2.5 gap-x-1.5 items-center text-16px600 hover:border-gray-300 hover:bg-gray-100 transition-all ease-in-out"
                        >
                            Elanı paylaş
                            <ShareSVG />
                        </button>
                        <button className="rounded-[22px] w-1/2 border border-gray-200 flex justify-center px-4 py-2.5 gap-x-1.5 items-center text-16px600 hover:border-gray-300 hover:bg-gray-100 transition-all ease-in-out">
                            Şikayət et
                            <InfoCircleSVG />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarDetail;
