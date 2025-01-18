import FaqAccordion from "./faq_accordion";

const FAQList = () => {
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
        <section id="faq" aria-labelledby="faq-section-title">
            <div className="container gap-x-16 relative flex justify-between">
                <div className="sticky top-0 w-1/4 h-full flex flex-col gap-y-4">
                    <h2 id="faq-section-title" className="text-gray-800 text-60px700">FAQ</h2>
                    <p className="text-gray-600 text-16px500" aria-describedby="faq-section-description">
                        Müştərilərimizin bizə tez-tez veriyi və qarşıladığı problərlə əlaqəli
                        sualların cavabını buradan tapa bilərsiniz
                    </p>
                </div>
                <div className="space-y-6 w-3/4 max-w-[940px]">
                    <FaqAccordion faqData={faqData} />
                </div>
            </div>
        </section>
    );
};

export default FAQList;
