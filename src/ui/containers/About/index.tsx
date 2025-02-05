import AboutImage from "@public/images/about.png";
import Image from "next/image";

const About = () => {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="bg-[linear-gradient(to_right,_#fffefe_5%,_#fff6f7_30%,_#fffefe_60%,_#fff6f7_90%)]"
        >
            <div className="container py-[120px] flex flex-col gap-y-16">
                <div className="flex justify-between items-center">
                    <h2 className="text-gray-800 text-60px700 w-3/5">Niyə biz</h2>
                    <p className="text-gray-600 text-16px500 w-2/5 text-right">
                        Müştərilərimizin bizi niyə seçdikləri və seçmək isdədikləri
                        gördüyümüz yüksək keyfiyyərtli işin nəticəsidir
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <article className="flex flex-col gap-y-6 w-1/2">
                        <h3 className="text-gray-900 text-30px700">
                            But I must explain to you how all this mistaken idea of denouncing
                        </h3>
                        <div className="text-gray-600 text16px400 flex flex-col gap-y-2 pr-14">
                            <p>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content
                                here, content here', making it look like readable English.
                            </p>
                            <p>
                                On the other hand, we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized by the charms of
                                pleasure of the moment, so blinded by desire, that they cannot
                                foresee the pain
                            </p>
                        </div>
                    </article>
                    <Image
                        quality={100}
                        src={AboutImage}
                        alt="Müştərilər niyə bizi seçir?"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
