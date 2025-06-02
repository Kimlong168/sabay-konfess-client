import { apiRequest } from "./config";

export interface Message {
  message: string;
  chatId: string;
}

export interface Photo extends Message {
  photoUrl: string;
}

export const sendMessage = async (data: Partial<Message>) => {
  return apiRequest<Partial<Message>, Message>("telegram/message", {
    method: "POST",
    data,
  });
};

export const sendPhoto = async (data: Partial<Photo>) => {
  return apiRequest<Partial<Photo>, Photo>("telegram/photo", {
    method: "POST",
    data,
  });
};
