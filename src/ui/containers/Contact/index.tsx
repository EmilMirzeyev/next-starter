import { WhatsappSVG } from "@public/vectors";
import Link from "next/link";
// import WhatsappImage from '@public/images/whatsapp.png'
import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact" className="container">
            <article
                aria-labelledby="contact-heading"
                className="container flex p-16 rounded-[32px] bg-brand-900 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]"
            >
                <h2 id="contact-heading" className="text-36px700 text-white">
                    Hər-hansı məsələdə çətinliyiniz olduğu təqdirdə bizimlə əlaqə saxlayın
                </h2>
                <div className="flex flex-col gap-y-4 w-1/3">
                    <Link
                        href="/"
                        aria-label="Contact us on WhatsApp"
                        className="flex items-center rounded-[38px] py-4 px-5 gap-x-4 bg-success-50 text-success-600 text-24px600"
                    >
                        {/* <Image src={WhatsappImage} alt="Whatsapp image" className="size-10" /> */}
                        <WhatsappSVG fill='#5BD066' />
                        Bizə yazın
                    </Link>
                    <p className="text-16px400 text-white text-center">
                        CarBuy komandası
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Contact;
