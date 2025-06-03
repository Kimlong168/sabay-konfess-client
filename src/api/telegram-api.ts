import { apiRequest } from "./config";

export interface Message {
  message: string;
  chatId: string;
}

interface Confession extends Message {
  type: string;
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

export const sendConfession = async (data: Confession) => {
  return apiRequest<Partial<Message>, Message>("telegram/confession", {
    method: "POST",
    data,
  });
};
