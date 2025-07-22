import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Divider,
  Grid,
  Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookInformationForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: '',
    genre: '',
    totalCopies: '',
    status: 'available',
    bookFeatures: [],
    publishedYear: '',
    moral: '',
    authors: [],
    language: '',
    floor: '',
    totalPages: '',
    volume: '',
    isbn: '',
    availableCopies: '',
    shelfLocation: '',
    createdDate: new Date(),
    publishedDate: new Date(1950, 9, 29)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleMultiSelect = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: typeof value === 'string' ? value.split(',') : value
    }));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Book Information
      </Typography>

      <Grid container spacing={3}>
        {/* Book Title */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Book title *"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Genre */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Genre/category *</InputLabel>
            <Select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              label="Genre/category *"
            >
              <MenuItem value="fiction">Fiction</MenuItem>
              <MenuItem value="non-fiction">Non-Fiction</MenuItem>
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="history">History</MenuItem>
              <MenuItem value="biography">Biography</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Total Copies */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Total Copies *"
            name="totalCopies"
            type="number"
            value={formData.totalCopies}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Status */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">Status *</Typography>
          <RadioGroup
            row
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <FormControlLabel value="available" control={<Radio />} label="Available" />
            <FormControlLabel value="reserved" control={<Radio />} label="Reserved" />
            <FormControlLabel value="outOfStock" control={<Radio />} label="Out of Stock" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Features Information
          </Typography>
        </Grid>

        {/* Book Features */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Book Features *</InputLabel>
            <Select
              multiple
              name="bookFeatures"
              value={formData.bookFeatures}
              onChange={handleMultiSelect}
              label="Book Features *"
            >
              <MenuItem value="illustrated">Illustrated</MenuItem>
              <MenuItem value="hardcover">Hardcover</MenuItem>
              <MenuItem value="signed">Signed by Author</MenuItem>
              <MenuItem value="limited">Limited Edition</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Published Year */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Published Year"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Moral of the Book */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Moral of the Book"
            name="moral"
            value={formData.moral}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Authors */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Author(s)</InputLabel>
            <Select
              multiple
              name="authors"
              value={formData.authors}
              onChange={handleMultiSelect}
              label="Author(s)"
            >
              <MenuItem value="author1">Author 1</MenuItem>
              <MenuItem value="author2">Author 2</MenuItem>
              <MenuItem value="author3">Author 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Language */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Language</InputLabel>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
              label="Language"
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="french">French</MenuItem>
              <MenuItem value="german">German</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Floor */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Floor</InputLabel>
            <Select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              label="Floor"
            >
              <MenuItem value="1">Floor 1</MenuItem>
              <MenuItem value="2">Floor 2</MenuItem>
              <MenuItem value="3">Floor 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Total Pages */}
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Total no of Pages"
            name="totalPages"
            type="number"
            value={formData.totalPages}
            onChange={handleChange}
            variant="outlined"
            inputProps={{ min: 10, max: 10000 }}
          />
        </Grid>

        {/* Book Volume */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Book Volume</InputLabel>
            <Select
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              label="Book Volume"
            >
              <MenuItem value="1">Volume 1</MenuItem>
              <MenuItem value="2">Volume 2</MenuItem>
              <MenuItem value="3">Volume 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* QR Code Generation */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={true} name="qrCode" />}
            label="QR Code Generation (Random Generated QR)"
            disabled
          />
        </Grid>

        {/* ISBN/ISSN */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="ISBN/ISSN"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Available Copies */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Available Copies"
            name="availableCopies"
            value={formData.availableCopies}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Shelf/Location Code */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Shelf/Location Code"
            name="shelfLocation"
            value={formData.shelfLocation}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* File Attachment */}
        <Grid item xs={12}>
          <Button variant="outlined" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>

        {/* Created Date */}
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Created date"
              value={formData.createdDate}
              onChange={(newValue) => setFormData({...formData, createdDate: newValue})}
              renderInput={(params) => <TextField {...params} fullWidth />}
              disabled
            />
          </LocalizationProvider>
        </Grid>

        {/* Book Published Date */}
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Book Published Date"
              value={formData.publishedDate}
              onChange={(newValue) => setFormData({...formData, publishedDate: newValue})}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        {/* Buttons */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Add Book
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BookInformationForm;