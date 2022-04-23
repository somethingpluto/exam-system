export interface BaseResponse<T> {
  code: number,
  msg: string,
  data: T
}

export interface BaseMultipageRequest {
  page?: number
  pageSize?: number
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface BaseMultipageResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;
}


export interface UserIdQuery {
  userId: number | string
}
