// utils/api.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions<T> {
  method?: HttpMethod;
  data?: T;
  isFormData?: boolean;
}

export async function apiRequest<TRequest, TResponse>(
  endpoint: string,
  options: RequestOptions<TRequest> = {}
): Promise<TResponse> {
  const { method = "GET", data, isFormData = false } = options;

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token") || undefined
      : undefined;

  const headers: HeadersInit = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let body: BodyInit | undefined;

  if (data) {
    body = isFormData ? (data as unknown as FormData) : JSON.stringify(data);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`,
    {
      method,
      headers,
      body: method !== "GET" ? body : undefined,
      // cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || "API request failed");
  }

  return res.json();
}
