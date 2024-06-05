import { AxiosResponse } from "axios";
import axiosInstance from "@/lib/AxiosInstance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
interface ApiResponse {
  data: any;
  [key: string]: any;
}

/**
 * Fetches data from the specified resource using the provided limit, current page, and optional id.
 * Handles nested data using flatMap.
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
  const response: AxiosResponse<ApiResponse> = await axiosInstance.get(url);

  let data = response.data.data;

  // Example nested query logic
  if (!id && Array.isArray(data)) {
    const nestedDataPromises = data.map((item) =>
      axiosInstance.get(`/${resource}/${item.id}/`)
    );

    const nestedDataResponses: AxiosResponse<ApiResponse>[] = await Promise.all(
      nestedDataPromises
    );
    const nestedData = nestedDataResponses.flatMap((res) => res.data.data);

    // Merge the nested data back into the original data
    data = data.map((item) => ({
      ...item,
      nested: nestedData.filter(
        (nestedItem) => nestedItem.parentId === item.id
      ),
    }));
  }

  return data;
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
const useFetchNestedDataApi = (
  resource: string,
  limit: number,
  currentPage: number,
  id?: number
): UseQueryResult<any> => {
  return useQuery<any>({
    queryKey: id
      ? [resource, id]
      : [resource, limit, currentPage],
    queryFn: () => fetchData(resource, limit, currentPage, id),
    refetchOnMount: false, // Optional: avoids refetching on mount
    refetchOnWindowFocus: false, // Optional: avoids refetching on window focus
    staleTime: 1000 * 60 * 5, // Optional: data will be considered fresh for 5 minutes
  });
};

export default useFetchNestedDataApi;