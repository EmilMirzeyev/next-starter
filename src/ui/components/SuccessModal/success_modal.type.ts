export type SuccessModalType = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  action?: () => void;
  visible: boolean;
  setVisible: (show: boolean) => void;
};
