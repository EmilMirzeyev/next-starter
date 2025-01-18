import { PropsWithChildren } from "react";

export type ModalType = PropsWithChildren & {
  title?: string;
  hasClose?: boolean;
  dialogClassName?: string;
  closeButton?: boolean;
  visible: boolean;
  clickOutside?: boolean;
  setVisible: (show: boolean) => void;
};
