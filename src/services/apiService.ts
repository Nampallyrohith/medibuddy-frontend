const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const fetchData = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = (await response.json()) as T;
    return { data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};
