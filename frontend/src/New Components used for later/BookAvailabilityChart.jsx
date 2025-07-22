import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Chennai", value: 26 },
  { name: "Coimbatore", value: 32 },
  { name: "Hyderabad", value: 24 },
  { name: "Bangalore", value: 10 },
  { name: "Kerala", value: 9 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF5A5F", "#A569BD"];
const BookAvailabilityChart = () => {
  const [year, setYear] = React.useState("2024");
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, marginTop: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight={600}>
            Books Allocation by Locations
          </Typography>
          <Select
            size="small"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{ fontSize: 14 }}
          >
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </Box>

        <Box height={250}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{
                  fontSize: 14,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookAvailabilityChart;
