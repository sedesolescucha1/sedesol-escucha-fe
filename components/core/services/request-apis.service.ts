import httpClient, { AuthType } from './http-client.service';
import { AxiosRequestConfig } from 'axios';

class ApiService {
  async get<T>(url: string, authType: AuthType, config?: AxiosRequestConfig): Promise<T> {
    return await httpClient.instance.get(url, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }

  async post<T, TData = unknown>(
    url: string,
    data: TData,
    authType: AuthType,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return await httpClient.instance.post(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }

  async put<T, TData = unknown>(
    url: string,
    data: TData,
    authType: AuthType,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return await httpClient.instance.put(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }

  async patch<T, TData = unknown>(
    url: string,
    data: TData,
    authType: AuthType,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return await httpClient.instance.patch(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }

  async delete<T>(url: string, authType: AuthType, config?: AxiosRequestConfig): Promise<T> {
    return await httpClient.instance.delete(url, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }

  async options<T>(url: string, authType: AuthType, config?: AxiosRequestConfig): Promise<T> {
    return await httpClient.instance.options(url, {
      ...config,
      headers: {
        ...config?.headers,
        'X-Auth-Type': authType,
      },
    });
  }
}

const apiService = new ApiService();

export default apiService;
