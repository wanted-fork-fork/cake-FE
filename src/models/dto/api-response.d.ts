export interface APIResponse<T> {
  data: T;
}

export interface APIErrorResponse {
  status: number;
  message: string;
  error?: string;
}
