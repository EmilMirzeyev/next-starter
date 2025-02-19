import { WhatsappSVG } from "@public/vectors";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <article
        aria-labelledby="contact-heading"
        className="container flex p-16 rounded-[32px] bg-brand-900 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)] mobile:flex-col mobile:gap-y-6 mobile:p-8"
      >
        <h3
          id="contact-heading"
          className="text-36px700 text-white mobile:text-24px600"
        >
          Hər-hansı məsələdə çətinliyiniz olduğu təqdirdə bizimlə əlaqə saxlayın
        </h3>
        <div className="flex flex-col items-center justify-center gap-y-4 min-w-[225px]">
          <Link
            href="/"
            aria-label="Contact us on WhatsApp"
            className="flex items-center rounded-[38px] py-4 px-5 pr-8 gap-x-4 bg-success-50 text-success-600 text-24px600 mobile:w-full mobile:justify-center"
          >
            <WhatsappSVG fill="#5BD066" />
            Bizə yazın
          </Link>
          <p className="text-16px400 text-[rgba(255,255,255,0.6)] text-center">
            CarBuy komandası
          </p>
        </div>
      </article>
    </section>
  );
};

export default Contact;
