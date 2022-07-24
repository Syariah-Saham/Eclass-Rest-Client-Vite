import React from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Box, useTheme, Card } from "@mui/material";

const ChartProgressLearning_Member: React.FC<{ value: number }> = ({
  value = 0,
}) => {
  const theme = useTheme();

  const options: ApexOptions = {
    chart: {
      foreColor: theme.palette.text.primary,
    },
    colors: [theme.palette.secondary.main],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: theme.palette.text.primary,
          strokeWidth: "96%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#fff",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  const series = [value];

  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="100%"
          height={"440px"}
        />
      </Card>
    </Box>
  );
};

export default ChartProgressLearning_Member;
