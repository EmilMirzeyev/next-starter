export type BreadCrumbType = {
  name: string;
  link: string | null;
  id: number;
};

export type BreadcrumbsType = {
  crumbs: BreadCrumbType[];
};
