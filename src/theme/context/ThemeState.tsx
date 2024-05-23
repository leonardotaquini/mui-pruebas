import { ThemeContext } from "./themeContext";
import { useReducer } from "react";
import { themeReducer } from "./themeReducer";

interface ThemeStateProps {
    children: React.ReactNode;
}

export const ThemeState = ({ children }: ThemeStateProps) => {


    const initialState = {
        theme: "dark"
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)


    const setTheme = (theme: string) => {
        dispatch({
            type: "SET_THEME",
            payload: theme
        })
    }

  return (
    <ThemeContext.Provider value={{
        theme: state.theme,
        setTheme        
    }}>
        { children }
    </ThemeContext.Provider>
  )
}
