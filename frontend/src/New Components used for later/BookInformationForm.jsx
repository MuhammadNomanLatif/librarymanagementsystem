import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const BookInformationForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    genre: "",
    totalCopies: "",
    status: "available",
    bookFeatures: [],
    publishedYear: "",
    moral: "",
    authors: [],
    language: "",
    floor: "",
    totalPages: "",
    volume: "",
    isbn: "",
    availableCopies: "",
    shelfLocation: "",
    createdDate: new Date(),
    publishedDate: new Date(1950, 9, 29),
  });
  const handleCancelButton = () => {
    onCancel(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleMultiSelect = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  return (
    <Box borderRadius={1} border={1} borderColor="grey.300" pb={2}>
      <Paper
        elevation={3}
        sx={{ boxShadow: "none", p: 3, width: "100%", margin: "auto" }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Book Information
        </Typography>
        <hr />
        <Grid container columnSpacing={18} rowSpacing={2}>
          <Grid container spacing={3}>
            {/* Row 1 */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Book title"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Authors"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="ISBN/ISSN"
                variant="outlined"
                size="small"
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Language"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Available Copies"
                variant="outlined"
                size="small"
              />
            </Grid>

            {/* Row 3 */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Total Copies"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Floor"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Shelf/Location Code"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Total no of Pages"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* <Grid item xs={12}>
            <Button variant="outlined" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
          </Grid> */}
            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="subtitle1" sx={{ minWidth: "80px" }}>
                Status *
              </Typography>
              <RadioGroup
                row
                name="status"
                value={formData.status}
                onChange={handleChange}
                sx={{ display: "flex", gap: 1 }}
              >
                <FormControlLabel
                  value="available"
                  control={<Radio size="small" />}
                  label="Available"
                  sx={{ marginRight: 0 }} // Remove default spacing
                />
                <FormControlLabel
                  value="reserved"
                  control={<Radio size="small" />}
                  label="Reserved"
                  sx={{ marginRight: 0 }}
                />
                <FormControlLabel
                  value="outOfStock"
                  control={<Radio size="small" />}
                  label="Out of Stock"
                  sx={{ marginRight: 0 }}
                />
              </RadioGroup>
            </Box>
          </Grid>
        </Grid>
        <Grid columnSpacing={18} rowSpacing={2} sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Features Information
          </Typography>
          <hr />
          <Grid spacing={3} container>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Book Volume"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Book Features"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Created Date"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Published Year"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={4}>
            <TextField
              fullWidth
              label="Moral of the Book"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10px",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#673fc6",
            "&:hover": { backgroundColor: "#fefef9ff" },
          }}
          onClick={handleCancelButton}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#673fc6",
            "&:hover": { backgroundColor: "#5c2ec8" },
          }}
        >
          Add Book
        </Button>
      </Grid>
    </Box>
  );
};

export default BookInformationForm;
