export interface APIResponse<T> {
  success: boolean;
  code: number;
  data: T;
}

export interface APIErrorResponse {
  status: number;
  message: string;
  error?: string;
}
