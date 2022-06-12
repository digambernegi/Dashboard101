import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { StackedChart, Pie, Button, LineChart, SparkLineChart } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
// import { useStateContext } from '../contexts/ContextProvider';
// import product9 from '../data/product9.jpg';

function Ecommerce() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
      rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div className="">
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl">$2000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              size="md"
              color="white"
              bgColor="blue"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap items-center justify-center gap-1">
          {earningData.map((item) => (
            <div
              className="bg-white dark:text-gray-20 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              key={item.title}
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-40 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* section 2 */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780">
          <div className="flex justify-between p-5">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="">Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="">Budget</span>
              </p>
            </div>
          </div>

          {/* chart */}
          <div className="flex flex-wrap mt-10 gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div className="">
                <p className="">
                  <span className="text-3xl font-semibold">$90000</span>
                  <span className="cursor-pointer bg-green-400 ml-2 text-white rounded-full text-xs p-1.5 hover:drop-shadow-xl">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              {/* div */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48000</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>

              {/* graph */}
              <div className="mt-5 border">
                <SparkLineChart
                  id="line-sparkline"
                  currentColor="blue"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                  text="Download report"
                  bgColor="blue"
                  color="white"
                  borderRadius="10px"
                />
              </div>
            </div>
            {/* right chart */}
            <div>
              <StackedChart height="320px" width="320px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
