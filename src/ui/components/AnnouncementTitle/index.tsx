import { ArrowRightUpSVG } from "@public/vectors";

type AnnouncementTitleType = {
    title: string;
    count: number;
}

const AnnouncementTitle = ({ title, count }: AnnouncementTitleType) => {
    return (
        <div className="rounded-[36px] bg-brand-25 p-3 pl-6 flex justify-between">
            <div className="flex items-center gap-x-4">
                <h2 className="text-brand-600 text-24px700">{title}</h2>
                <p className="border border-brand-500 bg-brand-500 text-white text-16px600 rounded-xl px-2 py-1 w-fit">
                    {count}
                </p>
            </div>
            <button className="text-16px600 text-brand-600 py-3 px-[18px] bg-white rounded-3xl flex items-center gap-x-1.5 hover:bg-brand-50 transition-all ease-in-out duration-200">
                Hamısını göstər
                <ArrowRightUpSVG className="text-brand-600 " />
            </button>
        </div>
    );
};

export default AnnouncementTitle;
