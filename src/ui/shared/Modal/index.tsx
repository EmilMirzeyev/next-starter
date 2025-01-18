import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { ModalType } from "./modal.type";
import { cn } from "@/core/utils/cn";
import { XCloseSVG } from "@public/vectors";

const Modal = ({
  children,
  title,
  dialogClassName,
  visible,
  clickOutside = true,
  setVisible,
  hasClose,
}: ModalType) => {
  return (
    <Transition show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => clickOutside && setVisible(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="w-full flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn(
                  "transform rounded-3xl bg-white dark:bg-lightBlack text-left align-middle shadow-xl transition-all",
                  dialogClassName
                )}
              >
                {(title || hasClose) && (
                  <div className="flex items-center justify-between gap-4 pt-4">
                    {title && <h3 className="text-24px600">{title}</h3>}

                    {hasClose && (
                      <button
                        onClick={() => setVisible(false)}
                        className="ml-auto hover:bg-gray-100 rounded-full p-2"
                      >
                        <XCloseSVG className="flex item-center justify-center" />
                      </button>
                    )}
                  </div>
                )}
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
