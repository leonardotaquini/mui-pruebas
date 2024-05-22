import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", display:'flex' }}>
      {/* navbar */}
      <Navbar drawerWidth={drawerWidth} />

      {/* sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow:1 , p:3}}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
