import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  ListItemButton,
  Fade,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [{ title: "Home", path: "/" }];

  const drawer = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "none",
        },
      }}
      role="presentation"
    >
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1.2 }}>
            Anywhere
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <List sx={{ pt: 2, position: "relative", zIndex: 1 }}>
        {navLinks.map((item, index) => (
          <Fade in={drawerOpen} timeout={300 + index * 100} key={item.title}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  mx: 2,
                  borderRadius: 2,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateX(8px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    letterSpacing: 0.5,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Fade>
        ))}

        <Box sx={{ px: 2, mt: 3 }}>
          <Button
            component={Link}
            to="/login"
            fullWidth
            variant="contained"
            sx={{
              py: 1.5,
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              fontWeight: 600,
              fontSize: "1.1rem",
              letterSpacing: 0.5,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.3)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Login
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <Slide direction="down" in={true} timeout={800}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: 800,
              letterSpacing: 2,
              background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            Anywhere Platform
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navLinks.map((item, index) => (
                <Fade in={true} timeout={600 + index * 100} key={item.title}>
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      letterSpacing: 1,
                      textTransform: "none",
                      fontSize: "1rem",
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transition: "left 0.6s ease",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        transform: "translateY(-2px)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.title}
                  </Button>
                </Fade>
              ))}

              <Fade in={true} timeout={1000}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/login"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: "1rem",
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "white",
                    letterSpacing: 0.5,
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1), transparent 70%)",
                      transform: "translateX(-100%)",
                      transition: "transform 0.6s ease",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.25)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                      "&::before": {
                        transform: "translateX(100%)",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Login
                </Button>
              </Fade>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default NavBar;
