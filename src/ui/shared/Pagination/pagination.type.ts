export type PaginationType = {
    total: number;
    perPage?: number;
    active?: number;
    pageChange?: (page: number) => void;
  };
  
  export type PaginationVMType = Pick<
    PaginationType,
    "total" | "perPage" | "pageChange"
  >;
  
  