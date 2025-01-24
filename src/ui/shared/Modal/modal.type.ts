import { PropsWithChildren, ReactNode } from "react";

export type ModalType = PropsWithChildren & {
  title?: string | ReactNode;
  hasClose?: boolean;
  dialogClassName?: string;
  closeButton?: boolean;
  visible: boolean;
  clickOutside?: boolean;
  setVisible: (show: boolean) => void;
};
