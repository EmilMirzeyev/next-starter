import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ModalType } from "./modal.type";
import { XSVG } from "@public/vectors";

const CModal = ({
  children,
  title = "",
  dialogClassName,
  visible,
  clickOutside = true,
  setVisible,
}: ModalType) => {
  return (
    <Transition show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => clickOutside && setVisible(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="w-full flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={[
                  "min-w-[260px] transform rounded bg-white dark:bg-lightBlack text-left align-middle shadow-xl transition-all p-4",
                  dialogClassName,
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <Dialog.Title>{title}</Dialog.Title>
                  <XSVG
                    className="cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CModal;
