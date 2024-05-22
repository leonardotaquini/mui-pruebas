import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material"

type SidebarProps = {
    drawerWidth: number
}

export const Sidebar = ( { drawerWidth }: SidebarProps ) => {
  return (
    <Box 
        component='nav' 
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar sx={{ display: 'grid', placeItems: 'center' }}>
                <Typography variant="h6"noWrap component='div' >RAF</Typography>
            </Toolbar>
            <Divider />

        </Drawer>
    </Box>
  )
}
