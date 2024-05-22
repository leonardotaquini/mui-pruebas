import { MenuOutlined, Close } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography, Drawer, List, ListItemText, Box, ListItemButton } from "@mui/material"
import { useState } from "react"

type NavbarProps = {
    drawerWidth: number
}

export const Navbar = ({ drawerWidth }: NavbarProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    
    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const menuItems = [
        { text: 'Item 1', action: () => alert('Item 1 clicked') },
        { text: 'Item 2', action: () => alert('Item 2 clicked') },
        { text: 'Item 3', action: () => alert('Item 3 clicked') },
    ]

    return (
        <>
            <AppBar 
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        edge="start" 
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h6" noWrap component='div'>Panel de administración</Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100%',
                        maxWidth: '100%',
                    },
                }}
            >
                <Box display="flex" justifyContent="flex-end" p={2}>
                    <IconButton onClick={handleDrawerClose}>
                        <Close />
                    </IconButton>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItemButton  key={index} onClick={() => {
                            handleDrawerClose();
                        }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
