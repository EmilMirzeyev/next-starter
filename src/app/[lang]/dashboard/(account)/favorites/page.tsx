import FavoritesContainer from "@/ui/containers/FavoritesContainer";

const Favorites = () => {
    return (
        <div className="w-full flex flex-col gap-y-8">
            <div className="border border-brand-25 bg-brand-25 rounded-2xl p-3 pl-5">
                <h1 className="text-brand-600 text-30px700">Seçilmişlər</h1>
            </div>
            <FavoritesContainer />
        </div>
    );
};

export default Favorites;
