export interface SullogData<T> {
  total: number;
  list: T[];
  pageNum: number;
  pageSize: number;
  size: number;
  startRow: number;
  endRow: number;
  pages: number;
  prePage: number;
  nextPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  navigatePages: number;
  navigatepageNums: number[];
  navigateFirstPage: number;
  navigateLastPage: number;
}

export interface SullogResponse<T> {
  code: string;
  result: string;
  data: SullogData<T>;
}

export interface Alchol {
  seq: number;
  name: string;
  type: string;
  abv: string;
  volume: string;
  price: string;
  ingredients: string;
  manufacturer: string;
  owner: string;
  lat: string;
  lng: string;
  province: string;
  city: string;
  phone: string;
}
