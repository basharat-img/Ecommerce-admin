import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { MatxTheme } from "./components";
import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// ALL CONTEXTS
// import { AuthProvider } from "./contexts/Auth0Context";
// import { AuthProvider } from "./contexts/JWTAuthContext";

import SettingsProvider from "./contexts/SettingsContext";
// ROUTES
import routes from "./routes";
// FAKE SERVER
import "../fake-db";




export default function App() {

  const content = useRoutes(routes);

  return (
    <SettingsProvider>

      <MatxTheme>
        <CssBaseline />
        {content}
      </MatxTheme>

    </SettingsProvider>
  );
}
