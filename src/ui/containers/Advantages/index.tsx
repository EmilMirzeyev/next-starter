"use client";
import { AdvantagesVM } from "./advantages.vm";
import AdvantagesFactory from "./advantages.factory";
import { cn } from "@/core/utils/cn";

const Advantages = () => {
  const { activeTab, setActiveTab } = AdvantagesVM();
  const { handleAdvantagesTab } = AdvantagesFactory({ activeTab });

  const radioData = [
    {
      id: 1,
      name: "Tərəfdaşlıq",
    },
    {
      id: 2,
      name: "Asan əlaqə",
    },
    {
      id: 3,
      name: "Uyğun qiymət",
    },
    {
      id: 4,
      name: "Kompaniyalar",
    },
  ];

  return (
    <section id="advantages">
      <div className="container flex flex-col gap-y-[104px] ">
        <h2 className="text-gray-800 text-60px700 text-center">
          Üstünlüklərimiz
        </h2>
        <div className="relative">
          <div className="bg-brand-950 rounded-[48px] p-3 w-fit min-w-[580px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {radioData.map(({ name, id }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "py-4 px-6 text-16px600 duration-300 bg-transparent rounded-[36px]",
                  activeTab == id
                    ? "text-brand-900 bg-white"
                    : "text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-[rgba(255,255,255,0.2)]"
                )}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="bg-brand-25 rounded-[32px] px-12 py-16 flex justify-between items-center">
            {handleAdvantagesTab()}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Advantages;
