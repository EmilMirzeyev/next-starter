import Swipper from "@/ui/components/Swipper";
import { LogoV1SVG, StarSVG } from "@public/vectors";
import { PartnersVM } from "./partners.vm";

const Partners = async () => {
  const { partners } = await PartnersVM();
  const swipperData = [
    {
      id: 1,
      name: "Delta Group",
      icon: <LogoV1SVG />,
    },
    {
      id: 2,
      name: "Delta Group 2",
      icon: <LogoV1SVG />,
    },
    {
      id: 3,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 4,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 5,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 6,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 7,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 8,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 9,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
    {
      id: 10,
      name: "Delta Group 3",
      icon: <LogoV1SVG />,
    },
  ];

  return (
    <section id="partners">
      <div className="flex flex-col gap-y-16">
        <div className="container flex flex-col justify-center items-center gap-y-4">
          <div
            aria-label="Partnerships Overview"
            className="text-14px600 text-gray-900 flex items-center gap-x-2.5 border border-gray-300 bg-gray-100 rounded-[53px] py-2 px-4 h-10
             smallMobile:text-12px600 smallMobile:gap-x-1.5"
          >
            <StarSVG aria-hidden="true" className="smallMobile:size-5"/>
            <span className="truncate">100+ şirkət CarBuy ilə əməkdaşlıq edir</span>
          </div>
          <h2 className="text-60px700 text-gray-800 mobile:text-40px700 smallMobile:text-36px700">
            Partnyorlarımız
          </h2>
        </div>
        <Swipper data={partners.data?.data || []} />
      </div>
    </section>
  );
};

export default Partners;
