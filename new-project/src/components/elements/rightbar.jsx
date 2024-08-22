import React from 'react'
import { QuestionAnalysisComponent } from './QuestionAnalysisComponent';

const Rightbar = ({
  scores
}) => {
  return (
    <div className="lg:mt-16 lg:mr-5 mx-5 lg:ml-0 space-y-5">
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Syllabus Wise Analysis</h3>
        <ul className="space-y-2">
        <li className="">
            <span className="text-gray-700">HTML Tools, Forms, History</span>
            <div className='flex justify-between items-center px-5 py-2'>
              <div className="w-4/5 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span className="text-blue-500 ml-4 font-bold">80%</span>
            </div>
          </li><li className="">
            <span className="text-gray-700">Tags & References in HTML</span>
            <div className='flex justify-between items-center px-5 py-2'>
              <div className="w-4/5 bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
              </div>
              <span className="text-orange-500 ml-4 font-bold">60%</span>
            </div>
          </li><li className="">
            <span className="text-gray-700">Tables & References in HTML</span>
            <div className='flex justify-between items-center px-5 py-2'>
              <div className="w-4/5 bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "24%" }}
              ></div>
              </div>
              <span className="text-red-500 ml-4 font-bold">24%</span>
            </div>
          </li><li className="">
            <span className="text-gray-700">HTML Tools, Forms, History</span>
            <div className='flex justify-between items-center px-5 py-2'>
              <div className="w-4/5 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "96%" }}
              ></div>
              </div>
              <span className="text-green-500 ml-4 font-bold">96%</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Question Analysis</h3>
        <p className="text-gray-500">
          You scored {scores.currentScore} question correct out of 15. However, it still needs some
          improvements.
        </p>
        <QuestionAnalysisComponent scores={scores} />
      </div>
    </div>
  );
}

export default Rightbar