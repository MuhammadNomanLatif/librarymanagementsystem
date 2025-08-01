import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonAppBar from "./ButtonAppBar";
const sampleBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "978-0743273565",
  image:
    "data:image/jpeg;base64,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",
  description: "A portrait of the Jazz Age in all of its decadence and excess.",
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <ButtonAppBar/>
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="book">
            {sampleBook.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={sampleBook.title}
        subheader={`ISBN: ${sampleBook.isbn}`}
      />
      <CardMedia
        component="img"
        height="200"
        image={
          sampleBook.image ||
          "https://via.placeholder.com/200x300.png?text=Book+Cover"
        }
        alt={sampleBook.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Author: {sampleBook.author}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {sampleBook.description || "No description available."}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}
