import { Box, Card, Typography, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const ChartUser: React.FC = () => {
  const theme = useTheme();

  const options: ApexOptions = {
    chart: {
      foreColor: theme.palette.text.primary,
    },
    colors: [theme.palette.secondary.main],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 10,
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const series = [
    {
      name: "series1",
      data: [21, 40, 28, 51, 42, 59, 55],
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ height: "450px" }}>
        <Typography variant="h5">Chart</Typography>
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height={"400px"}
        />
      </Card>
    </Box>
  );
};

export default ChartUser;
