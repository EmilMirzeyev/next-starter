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
        <section id="statistics" className="bg-brand-900 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]">
            <div className="container py-[120px] flex flex-col gap-y-16 text-white">
                <div className="flex items-center justify-between">
                    <h2 className="text-60px700 w-3/5 text-[rgba(255,255,255,0.9)]">Statistika</h2>
                    <p className="text-16px500 w-2/5 text-right text-[rgba(255,255,255,0.6)]">
                        Bizi seçən müştərilərin və sistemimizin ümumu statistikasını buradan
                        görə bilərsiniz
                    </p>
                </div>
                <div className="bg-black rounded-[32px] flex justify-around p-6">
                    {statisticsData.map((item) => (
                        <div
                            key={item.id}
                            className="p-5 px-14 flex flex-col gap-y-1 text-center hover:bg-brand-950 rounded-xl group"
                        >
                            <h2 className="text-48px700 text-[rgba(255,255,255,0.8)] duration-300 group-hover:text-white">{item.count}</h2>
                            <h3 className="text-16px600 text-[rgba(255,255,255,0.4)] duration-300 group-hover:text-white">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
