import React from "react";

import { api } from "../../services/api";

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    github_id: number;
    avatar_url: string;
    login: string;
  };
}

const LoginRedirect: React.FC = () => {
  const signIn = async (gitCode: string) => {
    const response = await api.post<IAuthResponse>("authenticate", {
      code: gitCode,
    });
    const { token } = response.data;
    localStorage.setItem("@lol:token", token);
  };
  const handleURL = async (urlWithoutCode: string, gitCode: string) => {
    window.history.pushState({}, "", urlWithoutCode);
    await signIn(gitCode);
    window.location.replace("http://localhost:3000");
  };

  React.useEffect(() => {
    const url = window.location.href;
    const [urlWithoutCode, gitCode] = url.split("?code=");
    handleURL(urlWithoutCode, gitCode);
  }, []);

  return <div>LoginRedirect</div>;
};

export default LoginRedirect;
