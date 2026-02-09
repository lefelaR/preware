'use client';

import axios, { AxiosResponse } from 'axios';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const BASE_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT ?? '';

const HttpService = {
  baseUrl: BASE_URL,

  request<T = unknown>(
    method: HttpMethod,
    url: string,
    config: Record<string, unknown> = {}
  ): Promise<T> {
    const fullUrl = url.startsWith('http') ? url : `${this.baseUrl ?? ''}${url}`;

    const headers = {
      ...(config.headers as Record<string, string> | undefined),
      Accept: 'application/json',
    };

    return axios({
      method,
      url: fullUrl,
      headers,
      ...config,
    })
      .then((response: AxiosResponse<T>) => {
        console.log('[HttpService] response.data', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('[HttpService] Error fetching data:', error);
        throw error;
      });
  },

  get<T = unknown>(url: string, config: Record<string, unknown> = {}): Promise<T> {
    return this.request<T>('get', url, config);
  },
};

export default HttpService;