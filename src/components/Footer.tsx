import {
  Container,
  Typography,
  Box,
  IconButton,
  Link,
  Divider,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "API", href: "/api" },
        { label: "Documentation", href: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact", href: "/contact" },
        { label: "Status", href: "/status" },
        { label: "Community", href: "/community" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <LinkedIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        color: "white",
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        "&::before": { display: "none" },
        "&::after": { display: "none" },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ pt: 6 }}>
          <Grid container columns={12} columnSpacing={4}>
            {/* Company Info */}
            <Grid sx={{ gridColumn: "span 4" }}>
              <Fade in={true} timeout={600}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      mb: 2,
                      background:
                        "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Anywhere Platform
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      opacity: 0.9,
                      lineHeight: 1.6,
                      maxWidth: 300,
                    }}
                  >
                    Empowering businesses worldwide with innovative solutions
                    that drive growth and success.
                  </Typography>

                  {/* Contact Info */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Email sx={{ mr: 1, fontSize: "1.1rem", opacity: 0.8 }} />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        contact@anywhere.com
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Phone sx={{ mr: 1, fontSize: "1.1rem", opacity: 0.8 }} />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        +1 (555) 123-4567
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOn
                        sx={{ mr: 1, fontSize: "1.1rem", opacity: 0.8 }}
                      />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        San Francisco, CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <Grid key={section.title} sx={{ gridColumn: "span 2" }}>
                <Fade in={true} timeout={800 + index * 100}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        fontSize: "1.1rem",
                        letterSpacing: 0.5,
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "white",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.2)",
            my: 2,
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Fade in={true} timeout={1200}>
            <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                  fontSize: "0.9rem",
                }}
              >
                © 2025 Anywhere Software — All rights reserved.
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  gap: 2,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <Link
                  href="/privacy"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    "&:hover": { color: "white" },
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    "&:hover": { color: "white" },
                  }}
                >
                  Terms of Service
                </Link>
              </Box>
            </Box>
          </Fade>

          {/* Social Links */}
          <Fade in={true} timeout={1400}>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      transform: "translateY(-3px) scale(1.1)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Fade>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
        }}
      />
    </Box>
  );
};

export default Footer;
