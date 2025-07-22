import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const yearlyData = {
  2024: [
    { name: "Jan", visitors: 4000, lenders: 2400 },
    { name: "Feb", visitors: 3000, lenders: 1398 },
    { name: "Mar", visitors: 2000, lenders: 9800 },
    { name: "Apr", visitors: 2780, lenders: 3908 },
    { name: "May", visitors: 1890, lenders: 4800 },
    { name: "Jun", visitors: 2390, lenders: 3800 },
    { name: "Jul", visitors: 3490, lenders: 4300 },
    { name: "Aug", visitors: 4000, lenders: 2400 },
    { name: "Sep", visitors: 3000, lenders: 1398 },
    { name: "Oct", visitors: 2000, lenders: 9800 },
    { name: "Nov", visitors: 2780, lenders: 3908 },
    { name: "Dec", visitors: 1890, lenders: 4800 },
  ],
  2023: [
    // Sample data for 2023
    { name: "Jan", visitors: 3500, lenders: 2200 },
    { name: "Feb", visitors: 2800, lenders: 1200 },
    // ... more months
  ],
};

const VisitorsChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedYear, setSelectedYear] = useState("2024");
  const [data, setData] = useState(yearlyData[selectedYear]);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    setData(yearlyData[year]);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: "100%", marginTop: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          No of Visitors
        </Typography>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Year</InputLabel>
          <Select value={selectedYear} label="Year" onChange={handleYearChange}>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ height: isMobile ? 300 : 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[3],
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: 20,
              }}
            />
            <Bar
              dataKey="visitors"
              fill={theme.palette.primary.main}
              name="Visitors"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="lenders"
              fill={theme.palette.secondary.main}
              name="Lenders"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VisitorsChart;
