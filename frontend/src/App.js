import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      </Router>
    </ThemeProvider>
  )
}

export default App;