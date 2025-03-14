export type BreadCrumbType = {
  name: string;
  link: string | null;
  id: number;
};

export type BreadcrumbsType = {
  homeLink?: string;
  crumbs: BreadCrumbType[];
};
