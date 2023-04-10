import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Assignment 1",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment 2",
    A: 59,
    fullMark: 60,
  },
  {
    subject: "Assignment 3",
    A: 55,
    fullMark: 60,
  },
  {
    subject: "Assignment 4",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment 5",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment 6",
    A: 57,
    fullMark: 60,
  },
  {
    subject: "Assignment 7",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment 8",
    A: 60,
    fullMark: 60,
  },
];

export default function Statistics() {
  return (
    <RadarChart
      cx={620}
      cy={250}
      outerRadius={150}
      width={1000}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip />
      <Radar
        name="Tawsif Adnan"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
