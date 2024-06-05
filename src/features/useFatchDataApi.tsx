import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axiosInstance from "@/lib/AxiosInstance";

/**
 * Fetches data from the specified resource using the provided limit, current page, and optional id.
 *
 * @param {string} resource - The resource to fetch data from.
 * @param {number} limit - The maximum number of items to fetch.
 * @param {number} currentPage - The current page of items to fetch.
 * @param {number} [id] - The optional id to fetch data for a specific item.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 */
const fetchData = async (
  resource: string,
  limit: number,
  currentPage: number,
  id?: number
): Promise<any> => {
  const url = id
    ? `/${resource}/${id}`
    : `/${resource}?limit=${limit}&page=${currentPage}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

/**
 * A custom hook that fetches data from the specified resource using the provided limit, current page, and optional id.
 *
 * @param {string} resource - The resource to fetch data from.
 * @param {number} limit - The maximum number of items to fetch.
 * @param {number} currentPage - The current page of items to fetch.
 * @param {number} [id] - The optional id to fetch data for a specific item.
 * @returns {UseQueryResult<any>} - The result of the useQuery hook.
 */
const useFetchDataApi = (
  resource: string,
  limit: number,
  currentPage: number,
  id?: number
): UseQueryResult<any> => {
  return useQuery({
    queryKey: id
      ? [resource, id,]
      : [resource, limit, currentPage],
    queryFn: () => fetchData(resource, limit, currentPage, id),
  });
};
export default useFetchDataApi;



