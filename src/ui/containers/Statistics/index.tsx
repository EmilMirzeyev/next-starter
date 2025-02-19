const Statistics = () => {
    const statisticsData = [
        {
            id: 1,
            name: "Aktiv elan sayı",
            count: "30k+",
        },
        {
            id: 2,
            name: "İstifadəçi sayı",
            count: "1.2k+",
        },
        {
            id: 3,
            name: "Satış sayı",
            count: "100k+",
        },
        {
            id: 4,
            name: "Partnyor sayı",
            count: "542+",
        },
    ];

    return (
        <section
            id="statistics"
            aria-labelledby="statistics-title"
            className="bg-[linear-gradient(to_right,_#fffefe_5%,_#fff6f7_30%,_#fffefe_60%,_#fff6f7_90%)]"
        >
            <div className="container py-[120px] flex flex-col gap-y-16 text-white mobile:py-16 mobile:gap-y-12">
                <div className="flex items-center justify-between mobile:flex-col mobile:gap-y-4">
                    <h2 className="text-60px700 w-3/5 text-gray-800 mobile:w-full mobile:text-center mobile:text-48px700 mobile:pb-2">Statistika</h2>
                    <p className="text-16px500 w-2/5 text-right text-gray-600 mobile:w-full mobile:text-center mobile:text-14px500">
                        Bizi seçən müştərilərin və sistemimizin ümumu statistikasını buradan
                        görə bilərsiniz
                    </p>
                </div>
                <div className="bg-brand-950 rounded-[32px] grid grid-cols-4 p-6 mobile:grid mobile:grid-cols-2 gap-4">
                    {statisticsData.map(({ id, name, count }) => (
                        <div
                            key={id}
                            className="p-5 flex flex-col gap-y-1 items-center hover:bg-[#390205] rounded-xl group mobile:w-full mobile:items-center"
                        >
                            <h3 className="text-48px700 text-[rgba(255,255,255,0.8)] duration-300 group-hover:text-white transition mobile:text-36px700">
                                {count}
                            </h3>
                            <p className="text-16px600 text-[rgba(255,255,255,0.4)] duration-300 group-hover:text-white transition mobile:text-14px600 mobile:w-full">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
