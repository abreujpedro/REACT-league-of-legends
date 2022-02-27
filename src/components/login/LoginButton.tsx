import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

const LoginButton: React.FC = () => {
  const { signUrl } = useContext(AuthContext);
  return <a href={signUrl}>LoginButton</a>;
};

export default LoginButton;
