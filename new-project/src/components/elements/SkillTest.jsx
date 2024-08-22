"use client";
import React, { useState } from "react";
import Middle from "@/components/elements/middle";
import Rightbar from "@/components/elements/rightbar";

export default function SkillTest() {
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 30,
    currentScore: 10,
  });

  const setScoreValue = (name, value) => {
    setScores({ ...scores, [name]: value });
  }
  return (
    <>
      <Middle scores={scores} setScoreValue={setScoreValue} />
      <Rightbar scores={scores} />
    </>
  );
}
