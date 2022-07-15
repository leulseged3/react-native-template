import { AxiosResponse } from 'axios';

/**
 * Extracts the response data from the {@link AxiosResponse}.
 *
 * @export
 * @template T The type of the data.
 * @param {AxiosResponse<T>} response The Axios response.
 * @returns {T} The data this response returned.
 */
export function getResponseData<T>(response: AxiosResponse<T>): T {
  return response.data;
}
