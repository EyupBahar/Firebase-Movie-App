import { createContext, useState } from "react";

// !  Ana component AuthContext i diğer componentleri sarmallaması için

export const AuthComponent = createContext();
// !  Her sayfadan erişmek istediğimiz kullanıcı için

const [currentUser, setCurrentUser] = useState();

const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  ); // ! current user kullanamak için context e value olarak verilir.
};

export default AuthContextProvider;
