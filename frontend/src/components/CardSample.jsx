import GroupIcon from "@mui/icons-material/Group";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const cards = [
  {
    backgroundColor: "#fef8e8",
    borderColor: "#f9c20c",
    icon: <MenuBookIcon />,
    title: "Total Books",
    value: "2000",
  },
  {
    backgroundColor: "#eeeefe",
    borderColor: "#635dfe",
    icon: <MenuBookIcon />,
    title: "Lended Books",
    value: "500",
  },
  {
    backgroundColor: "#e7f9f9",
    borderColor: "#16cdca",
    icon: <MenuBookIcon />,
    title: "Available Books",
    value: "1500",
  },
  {
    backgroundColor: "#eaf9ef",
    borderColor: "#38c86c",
    icon: <GroupIcon />,
    title: "Total Users",
    value: "1400",
  },
  {
    backgroundColor: "#fff1f6",
    borderColor: "#fd6590",
    icon: <MenuBookIcon />,
    title: "Overdue Books",
    value: "100",
  },
];
const CardSample = () => {
  return (
    <Paper>
      <Grid
        container
        spacing={2}
        borderRadius={2}
        justifyContent="center"
        height={190}
      >
        {cards.map((card, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: 150,
                height: 170,
                textAlign: "center",
                margin: "10px",
                borderRadius: 2,

                border: `1px solid ${card.borderColor}`,
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1,
              }}
            >
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Avatar
                    variant="square"
                    sx={{
                      bgcolor: card.borderColor,
                      width: 35,
                      height: 35,
                      borderRadius: 1,
                      marginTop: 1.5,
                    }}
                  >
                    {card.icon}
                  </Avatar>
                </Box>

                <Typography variant="caption" fontWeight="bold">
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.primary"
                  my={0.5}
                >
                  {card.value}
                </Typography>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    fontSize: "0.7rem",
                    padding: "2px 6px",
                    color: "#818181",
                    minWidth: "unset",
                    textTransform: "none",

                    border: "1px",
                    "&:hover": {
                      backgroundColor: "#f5f5f5", // optional hover effect
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CardSample;
