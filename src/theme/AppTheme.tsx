import { dark } from "./DarkTheme";
import { CssBaseline , ThemeProvider} from "@mui/material";

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
