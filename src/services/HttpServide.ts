'use client';

import axios, { AxiosResponse } from 'axios';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const BASE_URL = 'https://api.themoviedb.org/3/';

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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg1NzdjZDRjZTIwZTI3NDRhOTBhODM0MGU5NjliMyIsIm5iZiI6MTYxMTkzNzMzOC4wOTUsInN1YiI6IjYwMTQzNjNhMDgxNmM3MDA0MTg1ODMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvsbqQOE2DBGhslRWuBWNiMXSXOw-E9BBKeIvMxbVeQ`,
    };

    return axios({
      method,
      url: fullUrl,
      headers,
      ...config,
    })
      .then((response: AxiosResponse<T>) => {
        debugger
        console.log('[HttpService] response.data', response.data);
        return response.data;
      })
      .catch((error) => {
        debugger
        console.error('[HttpService] Error fetching data:', error);
        throw error;
      });
  },

  get<T = unknown>(url: string, config: Record<string, unknown> = {}): Promise<T> {
    return this.request<T>('get', url, config);
  },
};

export default HttpService;