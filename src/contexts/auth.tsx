import { createContext } from "react";
import React from "react";

import { api } from "../services/api";

interface IUser {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  userContext: IUser | null;
  signUrl: string;
  signOut: () => void;
  isLogged: boolean | null;
  authTokenKey: string;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = React.useState<IUser | null>(null);
  const [isLogged, setIsLogged] = React.useState<boolean | null>(null);
  const clientID = "ac9d143733b43bf88e8c";
  const signUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientID}`;
  const authTokenKey = "@lol:token";

  const signOut = () => {
    setUserState(null);
    localStorage.removeItem(authTokenKey);
  };

  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<IUser>("profile").then((response) => {
        setUserState(response.data);
      });
    }
    setIsLogged(Boolean(userState));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUrl,
        userContext: userState,
        signOut,
        isLogged,
        authTokenKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
