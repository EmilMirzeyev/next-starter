"use client";
import { cn } from "@/core/utils/cn";
import Accordion from "@/ui/shared/Accordion";
import { DownChevronSVG } from "@public/vectors";

// type FaqAccordionType = {
//     faqData: {
//         id: number;
//         title: string;
//         description: string;
//     }[];
// };

const FaqAccordion = () => {
    const faqData = [
        {
            id: 1,
            title: "Kenapa bumi muter? Apa karena di depan nikah?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 2,
            title: "Kenapa bumi muter? Apa karena di depan nikah?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 122,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 12,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 21,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 22,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 23,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 232,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 2322,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
        {
            id: 2232,
            title:
                "Placerat vulputate tincidunt nunc aliquam in bibendum. Cursus aliquet scelerisque nec arcu et id.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quibusdam fugit nemo cumque omnis quis consequatur? Laudantium, eum nesciunt.",
        },
    ];

    return (
        <div className="space-y-6 w-3/4 max-w-[940px]">
            {faqData.map((faq, index) => (
                <article key={faq.id} className="border border-gray-100 rounded-[20px]">
                    <Accordion
                        className="bg-gray-50"
                        accordionButton={(open) => (
                            <div className="text-start flex justify-between gap-4 items-center p-6">
                                <div className="flex items-center gap-x-5">
                                    <p className="text-transparent text-20px700 bg-clip-text bg-gradient-to-b from-[#FF656B] to-[#FF656B]/0">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </p>
                                    <p className="text-20px600">{faq.title}</p>
                                </div>
                                <div className="bg-gray-200 p-2 rounded-full flex">
                                    <DownChevronSVG
                                        stroke="#000"
                                        className={cn(
                                            "duration-500 ease-in-out transform",
                                            open ? "rotate-180" : ""
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                    >
                        <p className="text-16px400 text-gray-500 -mt-1.5 pb-6 px-[73px]">
                            {faq.description}
                        </p>
                    </Accordion>
                </article>
            ))}
        </div>
    );
};

export default FaqAccordion;
