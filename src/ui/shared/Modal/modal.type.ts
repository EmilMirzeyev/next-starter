import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export type ModalType = PropsWithChildren & {
  title?: string;
  dialogClassName?: string;
  visible: boolean;
  clickOutside?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
