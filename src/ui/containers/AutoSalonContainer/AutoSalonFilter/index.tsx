"use client";
import Button from "@/ui/shared/Button";
import Form from "@/ui/shared/Form";
import Input from "@/ui/shared/Input";
import { SearchSVG, X2SVG } from "@public/vectors";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

type AutoSalonFilterModel = {
    auto_salon_search: string;
};

const AutoSalonFilter = () => {
    const mehtods = useForm<AutoSalonFilterModel>({
        defaultValues: {
            auto_salon_search: "",
        },
    });
    const searchValue = mehtods.watch("auto_salon_search").trim();
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const onSubmit = (data: AutoSalonFilterModel) => {
        if (data.auto_salon_search.trim()) {
            params.set("search", data.auto_salon_search.trim().toString());
        } else {
            params.delete("search");
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const submitHandler = mehtods.handleSubmit(onSubmit);

    const resetSearchInput = () => {
        mehtods.reset();
        params.delete("search");
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex items-center justify-between w-full">
            <h1 className="text-gray-800 text-48px700">Avtosalonlar</h1>
            <div>
                <Form methods={mehtods} onSubmit={submitHandler}>
                    <Input
                        name="auto_salon_search"
                        className="w-[456px] rounded-[28px] "
                        inputClassName="placeholder:text-16px400 placeholer:text-gray-400 -ml-2"
                        placeholder="olivia@untitledui.com"
                        onChange={(val) => mehtods.setValue('auto_salon_search', val)}
                        leading={
                            <div>
                                <SearchSVG />
                            </div>
                        }
                        trailing={
                            <div className="flex items-center gap-x-2">
                                {searchValue && (
                                    <button type="button" onClick={resetSearchInput}>
                                        <X2SVG className="text-gray-500" />
                                    </button>
                                )}
                                <Button
                                    disabled={!searchValue}
                                    type="submit"
                                    className="rounded-[18px] h-9 px-3 text-14px600 min-w-[65px]"
                                >
                                    Axtar
                                </Button>
                            </div>
                        }
                    />
                </Form>
            </div>
        </div>
    );
};

export default AutoSalonFilter;
