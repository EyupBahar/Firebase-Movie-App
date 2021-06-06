import { createContext, useState } from "react";
// !  Ana component AuthContext i diğer componentleri sarmallaması için //
export const AuthContext = createContext();
// !  Her sayfadan erişmek istediğimiz kullanıcı için currentUser//
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  ); // ! current user kullanamak için context e value olarak verilir. //
};
export default AuthContextProvider;
