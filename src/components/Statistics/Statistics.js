import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [
    {name: 'React', uv: 8, pv: 2400, amt: 2400},
    {name: 'JavaScript', uv: 9, pv: 2400, amt: 2400},
    {name: 'CSS', uv: 8, pv: 2400, amt: 2400},
    {name: 'github', uv: 11, pv: 2400, amt: 2400},
];


const Statistics = () => {

  const renderBarChart = (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
    
    return (
        <div>
          <div>
            <p className='text-center text-2xl font-bold my-8'>Our Students' average marks on the quiz</p>
          </div>
          <div className='mx-auto'>
          {renderBarChart}

          </div>
        </div>
    );
};

export default Statistics;