export type PostCardType = {
  id: number;
  title: string;
  description: string;
  updateHandler: () => void;
  deleteHandler: () => void;
};
