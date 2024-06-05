import axios from "axios";

/**
 * Axios instance used for making HTTP requests to the API.
 *
 * This instance is configured with the API base URL and the default
 * content-type header set to "application/json".
 */
const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`, // API base URL
    headers: {
        "Content-Type": "application/json", // Default content-type header
    },
})

export default axiosInstance

