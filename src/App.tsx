import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/Routes";

import "./App.module.css";

function App() {

  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
