import React from "react";
import { AddCarModalFormVM } from "./add_car_modal.form.vm";
import Form from "@/ui/shared/Form";
import Select from "@/ui/shared/Select";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { PlusSVG } from "@public/vectors";
import { AddCarModalFormType } from "./add_car_modal.form.type";

const AddCarModalForm = ({ setVisible }: AddCarModalFormType) => {
  const { methods, submitHandler } = AddCarModalFormVM();

  return (
    <Form
      methods={methods}
      onSubmit={submitHandler}
      className="flex flex-col gap-y-2"
    >
      <h2 className="text-gray-700 text-14px500">
        Avtomobil haqqında məlumatlar
      </h2>
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4">
          <Select name="brand" data={[]} defaultText="Marka" />
          <Select name="model" data={[]} defaultText="Model" />
          <div className="flex w-full">
            <Select
              defaultText="İl min."
              name="minYear"
              buttonClassName="rounded-r-none"
              data={[
                {
                  id: 1,
                  name: "1990",
                },
              ]}
            />
            <Select
              defaultText="max."
              name="maxYear"
              buttonClassName="border-l-0 rounded-l-none"
              data={[
                {
                  id: 1,
                  name: "2025",
                },
              ]}
            />
          </div>
          <Select name="city" data={[]} defaultText="Şəhər" />
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            type="button"
            variant={ButtonVariantsEnum.EMPTY}
            className="rounded-[28px] bg-gray-100 w-full"
            onClick={() => setVisible(false)}
          >
            Bağla
          </Button>
          <Button
            type="submit"
            variant={ButtonVariantsEnum.BLACK}
            className="rounded-[28px] w-full flex gap-x-2.5"
          >
            Əlavə et
            <PlusSVG />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AddCarModalForm;
