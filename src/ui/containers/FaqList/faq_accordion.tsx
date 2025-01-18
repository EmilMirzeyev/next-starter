"use client";
import { cn } from "@/core/utils/cn";
import Accordion from "@/ui/shared/Accordion";
import { DownChevronSVG } from "@public/vectors";

type FaqAccordionType = {
    faqData: {
        id: number;
        title: string;
        description: string;
    }[];
};

const FaqAccordion = ({ faqData }: FaqAccordionType) => {
    return (
        <>
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
        </>
    );
};

export default FaqAccordion;
