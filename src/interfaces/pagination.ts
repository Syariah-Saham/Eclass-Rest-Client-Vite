export interface IPaginationLinks {
  url: string | null;
  label: string;
  active: boolean;
}

export interface IPagination {
  current_page: number;
  first_page_url: string | null;
  from: number;
  last_page: number;
  last_page_url: string | null;
  links: IPaginationLinks[];
  next_page_url: string | null;
  path: string | null;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export const defaultValuePagination = {
  current_page: 0,
  first_page_url: null,
  from: 0,
  last_page: 0,
  last_page_url: "",
  links: [],
  next_page_url: "",
  path: "",
  per_page: 0,
  prev_page_url: "",
  to: 0,
  total: 0,
  data: [],
};
