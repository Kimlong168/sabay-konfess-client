import { apiRequest } from "./config";

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  username: string;
  password: string;
  phone?: string | null;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    username: string;
    phone: string | null;
    profileImage: string;
  };
}

export const login = async (data: LoginRequest) => {
  const response = await apiRequest<LoginRequest, AuthResponse>("auth/login", {
    method: "POST",
    data,
  });

  // Save tokens to localStorage
  localStorage.setItem("token", response.accessToken);
  localStorage.setItem("refreshToken", response.refreshToken);

  return response;
};

export const register = async (data: RegisterRequest) => {
  const response = await apiRequest<RegisterRequest, AuthResponse>(
    "auth/register",
    {
      method: "POST",
      data,
    }
  );

  localStorage.setItem("token", response.accessToken);
  localStorage.setItem("refreshToken", response.refreshToken);

  return response;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

export const refreshToken = async () => {
  const storedRefreshToken = localStorage.getItem("refreshToken");
  if (!storedRefreshToken) {
    throw new Error("No refresh token found");
  }

  const response = await apiRequest<
    { refreshToken: string },
    { accessToken: string }
  >("auth/refresh-token", {
    method: "POST",
    data: { refreshToken: storedRefreshToken },
  });

  localStorage.setItem("token", response.accessToken);
  return response.accessToken;
};
