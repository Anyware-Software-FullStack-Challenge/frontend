import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" fontWeight={800} color="#232526">
        Home Page
      </Typography>
      <Typography variant="h6" color="#414345" mt={2}>
        Your main content goes here after the creative loading!
      </Typography>
    </Box>
  );
};

export default Home;
