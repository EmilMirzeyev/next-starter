import FaqAccordion from "./faq_accordion";

const FAQList = () => {
    return (
            <section id="faq" aria-labelledby="faq-section-title">
                <div
                    className="container gap-x-16 relative flex justify-between
                tablet:flex-col tablet:gap-y-16 mobile:flex-col mobile:gap-y-12"
                >
                    <div className="sticky top-0 w-1/4 h-full flex flex-col gap-y-4 tablet:w-full tablet:static mobile:w-full mobile:static">
                        <h2
                            id="faq-section-title"
                            className="text-gray-800 text-60px700 tablet:text-center mobile:text-center mobile:text-48px700"
                        >
                            FAQ
                        </h2>
                        <p
                            className="text-gray-600 text-16px500 
                        tablet:max-w-[480px] tablet:mx-auto tablet:px-2 tablet:text-center tablet:w-full
                        mobile:text-14px500 mobile:text-center"
                            aria-describedby="faq-section-description"
                        >
                            Müştərilərimizin bizə tez-tez veriyi və qarşıladığı problərlə
                            əlaqəli sualların cavabını buradan tapa bilərsiniz
                        </p>
                    </div>
                    <div className="space-y-6 w-3/4 max-w-[940px] tablet:w-full mobile:w-full">
                        <FaqAccordion className="w-full" />
                    </div>
                </div>
            </section>
    );
};

export default FAQList;
