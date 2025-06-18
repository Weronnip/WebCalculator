import { Layout } from "./components/layout/layout";
import { ThemeProvider } from "./context/theme_context/theme_context";

export function App() {

  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  )
}

