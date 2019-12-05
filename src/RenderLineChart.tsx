import React from 'react';
import { LineChart, Line, CartesianGrid, Tooltip } from 'recharts';
const data = [
  {clk: 17, tw: 20, fb: 1000},
  {clk: 15, tw: 40, fb: 2400},
  {clk: 18, tw: 60, fb: 1000},
  {clk: 53, tw: 80, fb: 2400},
  {clk: 20, tw: 100, fb: 1000},
  {clk: 23, tw: 120, fb: 2400},
  {clk: 20, tw: 20, fb: 1000},
  {clk: 22, tw: 40, fb: 2400},
  {clk: 26, tw: 60, fb: 1000},
  {clk: 23, tw: 120, fb: 2400},
  {clk: 48, tw: 20, fb: 1000},
  {clk: 25, tw: 40, fb: 2400},
  {clk: 27, tw: 60, fb: 1000},
  {clk: 29, tw: 80, fb: 2400},
  {clk: 26, tw: 100, fb: 1000},
  {clk: 29, tw: 120, fb: 2400},
  {clk: 27, tw: 20, fb: 1000},
  {clk: 7, tw: 40, fb: 2400},
  {clk: 27, tw: 60, fb: 1000},
  {clk: 20, tw: 120, fb: 2400},
  {clk: 23, tw: 20, fb: 1000},
  {clk: 24, tw: 40, fb: 2400},
  {clk: 22, tw: 60, fb: 1000},
  {clk: 23, tw: 80, fb: 2400},
  {clk: 22, tw: 100, fb: 1000},
  {clk: 28, tw: 120, fb: 2400},
  {clk: 23, tw: 20, fb: 1000},
  {clk: 29, tw: 40, fb: 2400},
  {clk: 32, tw: 60, fb: 1000}
];

export default () => (
  <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
    <Line dot={false} type="linear" dataKey="clk" stroke="#DAA520" strokeWidth={2}/>
    <CartesianGrid vertical={false} stroke="#EEE" />
    <Tooltip />
  </LineChart>
);
