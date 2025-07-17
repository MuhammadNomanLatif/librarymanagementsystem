import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookInformationForm = () => {
  const [status, setStatus] = useState({
    available: false,
    reserved: false,
    outOfStock: false
  });
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [floor, setFloor] = useState('');
  const [bookVolume, setBookVolume] = useState('');
  const [publishedDate, setPublishedDate] = useState(null);
  const [createdDate, setCreatedDate] = useState(null);

  const handleStatusChange = (event) => {
    setStatus({
      ...status,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Book Information
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Book Title */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Book title *
              </Typography>
              <TextField
                fullWidth
                placeholder="Book name here"
                variant="outlined"
                required
              />
            </Grid>

            {/* Gene/Category */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Gene/category *
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Choose a Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Choose a Category"
                  required
                >
                  <MenuItem value="fiction">Fiction</MenuItem>
                  <MenuItem value="non-fiction">Non-Fiction</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="history">History</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Total Copies */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Total Copies *
              </Typography>
              <TextField
                fullWidth
                type="number"
                placeholder="Enter no of Copies"
                variant="outlined"
                required
              />
            </Grid>

            {/* Status */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Status *
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={status.available}
                      onChange={handleStatusChange}
                      name="available"
                      color="primary"
                    />
                  }
                  label="Available"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={status.reserved}
                      onChange={handleStatusChange}
                      name="reserved"
                      color="primary"
                    />
                  }
                  label="Reserved"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={status.outOfStock}
                      onChange={handleStatusChange}
                      name="outOfStock"
                      color="primary"
                    />
                  }
                  label="Out of Stock"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                Features Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
            </Grid>

            {/* Book Features */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Book Features *
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select from list</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Select from list"
                  required
                >
                  <MenuItem value="illustrated">Illustrated</MenuItem>
                  <MenuItem value="signed">Signed Edition</MenuItem>
                  <MenuItem value="limited">Limited Edition</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Published Year */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Published Year
              </Typography>
              <DatePicker
                views={['year']}
                value={publishedDate}
                onChange={(newValue) => setPublishedDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>

            {/* Moral of the Book */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Moral of the Book *
              </Typography>
              <TextField
                fullWidth
                placeholder="Book name here"
                variant="outlined"
                required
                multiline
                rows={2}
              />
            </Grid>

            {/* Author(s) */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Author(s) *
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select from list</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Select from list"
                  required
                >
                  <MenuItem value="author1">Author 1</MenuItem>
                  <MenuItem value="author2">Author 2</MenuItem>
                  <MenuItem value="author3">Author 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Language */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Language *
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select from list</InputLabel>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  label="Select from list"
                  required
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Floor */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Floor *
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select from list</InputLabel>
                <Select
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  label="Select from list"
                  required
                >
                  <MenuItem value="floor1">Floor 1</MenuItem>
                  <MenuItem value="floor2">Floor 2</MenuItem>
                  <MenuItem value="floor3">Floor 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Total no of Pages */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Total no of Pages *
              </Typography>
              <TextField
                fullWidth
                type="number"
                placeholder="10 to 10,000"
                variant="outlined"
                inputProps={{ min: 10, max: 10000 }}
                required
              />
            </Grid>

            {/* Book Volume */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Book Volume
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select from list</InputLabel>
                <Select
                  value={bookVolume}
                  onChange={(e) => setBookVolume(e.target.value)}
                  label="Select from list"
                >
                  <MenuItem value="volume1">Volume 1</MenuItem>
                  <MenuItem value="volume2">Volume 2</MenuItem>
                  <MenuItem value="volume3">Volume 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* QR Code Generation */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                QR Code Generation
              </Typography>
              <TextField
                fullWidth
                value="Random Generated QR"
                variant="outlined"
                disabled
              />
            </Grid>

            {/* ISBN/ISSN */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                ISBN/ISSN
              </Typography>
              <TextField
                fullWidth
                placeholder="Book name here"
                variant="outlined"
              />
            </Grid>

            {/* Available Copies */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Available Copies
              </Typography>
              <TextField
                fullWidth
                placeholder="Book name here"
                variant="outlined"
              />
            </Grid>

            {/* Shelf/Location Code */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Shelf/Location Code
              </Typography>
              <TextField
                fullWidth
                placeholder="Book name here"
                variant="outlined"
              />
            </Grid>

            {/* File Attachment */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                File Attachment
              </Typography>
              <Button variant="outlined" component="label">
                Choose a file
                <input type="file" hidden />
              </Button>
            </Grid>

            {/* Dates Section */}
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Created date
              </Typography>
              <DatePicker
                value={createdDate}
                onChange={(newValue) => setCreatedDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Book Published Date
              </Typography>
              <TextField
                fullWidth
                value="29-Oct-1950"
                variant="outlined"
                disabled
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
              <Button variant="outlined" color="primary" size="large">
                Cancel
              </Button>
              <Button variant="contained" color="primary" size="large" type="submit">
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default BookInformationForm;