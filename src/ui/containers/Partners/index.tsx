import Swipper from "@/ui/components/Swipper";
import {
    Partner1SVG,
    Partner2SVG,
    Partner3SVG,
    Partner4SVG,
    Partner5SVG,
    Partner6SVG,
    StarSVG,
} from "@public/vectors";

const Partners = () => {
    const swipperData = [
        // {
        //     id: 1,
        //     name: "Delta Group",
        //     icon: Partner1SVG,
        // },
        {
            id: 1,
            name: "Delta Group",
            icon: <Partner1SVG />,
        },
        {
            id: 2,
            name: "Delta Group 2",
            icon: <Partner2SVG />,
        },
        {
            id: 3,
            name: "Delta Group 3",
            icon: <Partner3SVG />,
        },
        {
            id: 4,
            name: "Delta Group 3",
            icon: <Partner4SVG />,
        },
        {
            id: 5,
            name: "Delta Group 3",
            icon: <Partner5SVG />,
        },
        {
            id: 6,
            name: "Delta Group 3",
            icon: <Partner6SVG />,
        },
        {
            id: 7,
            name: "Delta Group 3",
            icon: <Partner5SVG />,
        },
        {
            id: 8,
            name: "Delta Group 3",
            icon: <Partner6SVG />,
        },
        {
            id: 9,
            name: "Delta Group 3",
            icon: <Partner6SVG />,
        },
        {
            id: 10,
            name: "Delta Group 3",
            icon: <Partner6SVG />,
        },
    ];

    return (
        <section id="partners">
            <div className="flex flex-col gap-y-16">
                <div className="container flex flex-col justify-center items-center gap-y-4">
                    <div
                        aria-label="Partnerships Overview"
                        className="text-14px600 text-gray-900 flex items-center gap-x-2.5 border border-gray-300 bg-gray-100 rounded-[53px] py-2 px-4"
                    >
                        <StarSVG aria-hidden="true" />
                        <span>100+ şirkət CarBuy ilə əməkdaşlıq edir</span>
                    </div>
                    <h2 className="text-60px700 text-gray-800">Partnyorlarımız</h2>
                </div>
                <Swipper data={swipperData} />
            </div>
        </section>
    );
};

export default Partners;
