export interface ApiSuccessResponse<T> {
    success: true;
    ip: string;
    data: T;
}
export interface ApiFailureResponse {
    success: false;
    ip: string;
    error: string;
}
export type ApiResponse<T> = ApiFailureResponse | ApiSuccessResponse<T>;
