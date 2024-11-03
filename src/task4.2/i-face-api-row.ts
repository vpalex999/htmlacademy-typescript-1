export interface ApiSuccess<TData> {
  status: "success";
  data: Required<TData>;
}
