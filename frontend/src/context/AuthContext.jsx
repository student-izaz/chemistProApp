import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token")
  );

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUserToken(data.token);
  };

  const logout = () => {
    localStorage.clear();
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
