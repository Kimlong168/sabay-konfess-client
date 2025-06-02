import { apiRequest } from "./config";

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  chatId: string;
  phone: string | null;
  profileImage: string | null;
}

export const getAllUsers = async () => {
  return apiRequest<null, User[]>("users");
};

export const getUserById = async (id: string) => {
  return apiRequest<null, User>(`users/${id}`);
};

export const createUser = async (data: Partial<User>) => {
  return apiRequest<Partial<User>, User>("users", {
    method: "POST",
    data,
  });
};

export const updateUser = async (id: string, data: Partial<User>) => {
  return apiRequest<Partial<User>, User>(`users/${id}`, {
    method: "PUT",
    data,
  });
};

export const deleteUser = async (id: string) => {
  return apiRequest<null, { message: string }>(`users/${id}`, {
    method: "DELETE",
  });
};
