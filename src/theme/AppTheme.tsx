import { dark, light } from "./";
import { CssBaseline , ThemeProvider} from "@mui/material";


interface AppThemeProps {
  children: React.ReactNode;

}

export const AppTheme = ({ children }: AppThemeProps) => {
  return (

    <ThemeProvider theme={dark}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
