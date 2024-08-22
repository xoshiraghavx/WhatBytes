"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  percentile: {
    label: "percentile",
    color: "hsl(var(--chart-1))",
  },
};

export function ComparisionGraphComponent({ scores }) {
  const chartData = [
    { student: "Other", percentile: 48 },
    { student: "Other", percentile: 12 },
    { student: "Other", percentile: 24 },
    { student: "Other", percentile: 42 },
    { student: "Other", percentile: 6 },
    { student: "You🥂", percentile: scores.percentile },
  ];
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="student"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="percentile"
          type="natural"
          stroke="var(--color-percentile)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-percentile)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
