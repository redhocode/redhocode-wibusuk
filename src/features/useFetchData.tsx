import { axiosInstance } from "@/lib/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react"

export const useFetchData = () => {

 const { isLoading, error, data } = useQuery({
   queryKey: ["content"],
   queryFn: async () => {
     const response = await axiosInstance.get("/manga?limit=8");
     return response.data;
   },
 });

 return { isLoading, error, data };
 }