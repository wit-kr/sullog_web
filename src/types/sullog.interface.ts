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

export interface AlcoholType {
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

export interface Experience {
  seq: number;
  user_seq: number;
  alchol_seq: number;
  star: string;
  abv: string;
  incense: string;
  taste: string;
  texture: string;
  img_seq: string;
  time: string;
  flower: string;
  fruit: string;
  grain: string;
  nut: string;
  sweetness: string;
  dairy: string;
  etc: string;
  image_byte: string[];
  name: string;
  type: string;
  abv_num: string;
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

export interface SullogExpResponse {
  code: string;
  result: string;
  data: Experience[];
}

export interface SullogOneExpResponse {
  data: Experience;
}

export interface SullogAllExpResponse {
  data: Experience[];
}
