import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE } from './config';

export abstract class HttpClient {
  protected instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error),
    );
  };

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((params: AxiosRequestConfig) => {
      const config = {
        ...params,
        baseURL: API_BASE,
      };
      return config;
    });
  };

  public getUri(config?: AxiosRequestConfig): string {
    return this.instance.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.instance.request(config);
  }

  public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config);
  }

  public delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.head(url, config);
  }

  public post<T, D, R = AxiosResponse<T>>(
    url: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }

  public put<T, D, R = AxiosResponse<T>>(
    url: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.patch(url, data, config);
  }
}
