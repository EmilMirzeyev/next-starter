export type SuccessModalType = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  visible: boolean;
  setVisible: (show: boolean) => void;
};
