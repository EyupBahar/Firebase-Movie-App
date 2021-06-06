import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;

//? kullanmak istediğimiz bütün sayfalar <AppRouter /> içinde olacak //
