import  axiosInstance  from "@/lib/AxiosInstance";

export const useFatchdata = async (resource: string,query?: string) => {
  const response = await axiosInstance.get(`/${resource}?${query}`);
  return response.data;
}

export const useFatchNestedData = async (resource: string,objectProprerty: any) => {
  const response = await useFatchdata(resource);
  return response.data.flatmap((item: { entry: any; }) => item.entry)
}