import React, { useEffect, useState } from "react";
import { getMonth } from "../../../helpers/getMonth";
import { useAppSelector } from "../../../redux/hooks";
import { ApexOptions } from "apexcharts";
import { Box, Card, Typography, useTheme } from "@mui/material";
import Chart from "react-apexcharts";

const ChartPayment: React.FC = () => {
  const theme = useTheme();
  const [data, setData] = useState<{
    labels: string[];
    values: number[];
  }>({
    labels: [],
    values: [],
  });

  const statistics = useAppSelector((state) => state.statistics);

  useEffect(() => {
    const labels: string[] = [];
    const values: number[] = [];
    statistics.list.forEach((item) => {
      labels.push(getMonth(item.month));
      values.push(item.incomes);
    });
    setData({
      labels,
      values,
    });
  }, [statistics]);

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
      categories: data.labels,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const series = [
    {
      name: "incomes",
      data: data.values,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ height: "450px" }}>
        <Typography variant="h5">Grafik Pendapatan</Typography>
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

export default ChartPayment;