"use client";
import CarCard from "@/ui/components/CarCard";
import TabBar from "@/ui/components/TabBar";
import Link from "next/link";
import { FacoritesContainerVM } from "./facorites_container.vm";

const FavoritesContainer = () => {
  FacoritesContainerVM()

  const tabData = [
    { id: 1, name: "Bütün elanlar", count: 7 },
    { id: 2, name: "Barter", count: 7 },
    { id: 3, name: "Təcili satıram", count: 7 },
    { id: 4, name: "Təcili alıram", count: 7 },
    { id: 5, name: "Lizinq", count: 7 },
    { id: 6, name: "Adi elanlar", count: 7 },
  ];

  return (
    <div className="flex flex-col gap-y-8">
      <TabBar tabParam="tabId" tabData={tabData} />
      <h2 className="text-gray-900 text-24px700">Bütün elanlar</h2>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 7 }, (_, i) => (
          <Link key={i} href={'/dashboard/1'}>
            <CarCard />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FavoritesContainer