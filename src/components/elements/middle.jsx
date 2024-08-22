import React from "react";
import Update from "./update";
import { ComparisionGraphComponent } from "./ComparisionGraphComponent";

const Middle = ({ scores, setScoreValue }) => {
  return (
    <div className="p-6 lg:w-[55rem]">
      <div className="space-y-5">
        <h6>Skill Test</h6>
        <div className="bg-white border rounded-lg p-4">
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png"
                alt="Hyper Text Markup Language"
                className="rounded-lg w-16 sm:w-20"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:mx-5">
              <h2 className="text-lg sm:text-xl font-bold">
                Hyper Text Markup Language
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-5">
              <Update scores={scores} setScoreValue={setScoreValue} />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Quick Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                <span role="img" aria-label="trophy">
                  🏆
                </span>
                {scores.rank}
              </div>
              <p className="text-gray-500">YOUR RANK</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                <span role="img" aria-label="clipboard">
                  📋
                </span>
                {scores.percentile}%
              </div>
              <p className="text-gray-500">PERCENTILE</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                <span role="img" aria-label="check">
                  ✅
                </span>
                {scores.currentScore} / 15
              </div>
              <p className="text-gray-500">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 col-span-2">
          <h3 className="text-lg font-bold mb-2">Comparison Graph</h3>
          <p className="text-gray-500">
            You scored {scores.percentile}% percentile which is
            {scores.percentile == 72 && " equal to "}
            {scores.percentile > 72 && " higher than "}
            {scores.percentile < 72 && " lower than "}
            the average percentile 72% of all the engineers who took this
            assessment
          </p>
          {/* Add graph visualization here */}
          <ComparisionGraphComponent scores={scores} />
        </div>
      </div>
    </div>
  );
};

export default Middle;
