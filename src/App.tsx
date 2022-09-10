import { useRoutes } from "react-router-dom";
import routes from "./router";
import LookScreen from "./Common/components/LockScreen";
import theme from "./Themes";
import "./app.scss"
import Loading from "./Common/components/Loading";
import { ConfirmDialog, MessageDialog } from "./Common/components/Dialog";
import { ThemeProvider } from "@mui/material";
function App() {
  const element = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {element}
        <Loading />
        <LookScreen />
        <MessageDialog />
        <ConfirmDialog />
      </div>
    // </ThemeProvider>
  );
}

export default App;
