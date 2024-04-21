import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CssBaseline,
  Typography,
} from "@mui/material";

const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MiniDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Drawer(props) {
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const drawerOpen = () => {
    setOpen(true);
  };
  const drawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="flex">
      <CssBaseline />
      {/* Navbar */}
      <AppBar className="fixed px-2" open={open}>
        <Toolbar className="flex items-center gap-6">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={drawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <i className="fa-solid fa-bars text-white"></i>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <MiniDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={drawerClose}>
            {theme.direction === "rtl" ? (
              <i className="fa-solid fa-angle-right px-1"></i>
            ) : (
              <i className="fa-solid fa-angle-left px-1"></i>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="flex flex-col justify-between items-center h-full px-2 pb-5">
          <List>
            {/* Overview */}
            <ListItem>
              <ListItemButton
                className={` min-h-8 ${
                  open ? "justify-between" : "justify-center"
                }`}
              >
                <NavLink to="/">
                  <ListItemIcon
                    className={` justify-center items-center text-2xl ${
                      open ? "gap-4" : ""
                    }`}
                  >
                    <i className="fa-regular fa-folder-open"></i>
                    <ListItemText
                      primary="Overview"
                      className={`${open ? "block" : "hidden"}`}
                    />
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>
            </ListItem>
            {/* Sales Report */}
            <ListItem>
              <ListItemButton
                className={` min-h-8 ${
                  open ? "justify-between" : "justify-center"
                }`}
              >
                <NavLink to="/salesReport">
                  <ListItemIcon
                    className={`justify-center items-center text-2xl ${
                      open ? "gap-4" : ""
                    }`}
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <ListItemText
                      primary="Sales Report"
                      className={`${open ? "block" : "hidden"}`}
                    />
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>
            </ListItem>
            {/* Inventory */}
            <ListItem>
              <ListItemButton
                className={` min-h-8 ${
                  open ? "justify-between" : "justify-center"
                }`}
              >
                <NavLink to="/inventory">
                  <ListItemIcon
                    className={`justify-center text-2xl items-center ${
                      open ? "gap-4" : ""
                    }`}
                  >
                    <i className="fa-solid fa-list-check"></i>
                    <ListItemText
                      primary="Inventory"
                      className={`${open ? "block" : "hidden"}`}
                    />
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>
            </ListItem>
            {/* Customer */}
            <ListItem>
              <ListItemButton
                className={` min-h-8 ${
                  open ? "justify-between" : "justify-center"
                }`}
              >
                <NavLink to="/customer">
                  <ListItemIcon
                    className={`justify-center text-2xl items-center ${
                      open ? "gap-4" : ""
                    }`}
                  >
                    <i className="fa-solid fa-users"></i>
                    <ListItemText
                      primary="Customer"
                      className={`${open ? "block" : "hidden"}`}
                    />
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
          <Button
            className={`w-full ${open ? "px-3" : ""} min-h-10`}
            variant="text"
          >
            <i className="fa-solid fa-right-from-bracket fa-xl px-2"></i>
            {open ? "Sign Out" : null}
          </Button>
        </div>
      </MiniDrawer>
      <Box
        className="bg-[#f4f5f6] min-h-screen"
        color="brown"
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

Drawer.propTypes = { children: PropTypes.node };

export default Drawer;
