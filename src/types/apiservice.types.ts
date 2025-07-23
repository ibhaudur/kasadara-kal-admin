
export interface IApiCall {
    key: string;
    url: string;
    method: string;
  }
  export interface AuthGuardProps {
    children: React.ReactNode;
    requiredPermissions: string;
  }
  export interface ApiResponse<T> {
    data?: T;
    status?: number;
    message: string;
    accessToken?: string;
  }
  export interface ApiError {
    response?: {
      data?: {
        message?: string;
      };
    };
  }