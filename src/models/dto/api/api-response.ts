export interface APIResponse<T> {
  data: T;
}

export interface APIErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}
