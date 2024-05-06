// auth.ts

import axios from "axios";

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await axios.post("http:localhost:3000/api/v1/signin", {
    email,
    password,
  });
  const token = response.data.token;
  localStorage.setItem("token", token);
  return token;
};

export const logout = (): void => {
  localStorage.removeItem("token");
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const isLoggedIn = (): boolean => {
  return !!getToken();
};
