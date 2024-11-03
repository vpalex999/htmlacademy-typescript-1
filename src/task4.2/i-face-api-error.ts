export interface ApiError<TData> {
  status: "error";
  error: string;
  data: Partial<Record<keyof TData, string>>;
}
