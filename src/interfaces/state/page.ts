export interface IPage {
  currentPage: number;
  totalPage: number;
  perPage: number;
}

export interface IPageHook {
  current: number;
  total: number;
  perPage: number;
}
