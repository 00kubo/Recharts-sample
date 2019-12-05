import React from 'react';
import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 500, pv: 2000, amt: 1000}, {name: 'Page B', uv: 700, pv: 3200, amt: 2400}, {name: 'Page C', uv: 400, pv: 2400, amt: 1800}];

export default () => (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
