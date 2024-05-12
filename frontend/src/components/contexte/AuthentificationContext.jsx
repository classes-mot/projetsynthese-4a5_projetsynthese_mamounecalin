import { createContext } from "react";

export const AuthentificationContexte = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
