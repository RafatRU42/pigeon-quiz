import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../components/Topic/Topic';

const QuizRoute = () => {

    const data1 = useLoaderData()
    // console.log('object',data);

    return (
      <div>



<h1 className='text-2xl my-4 font-bold'>Welcome To Our Page</h1>


<div className="text-section">
  <img className='h-[200px] rounded' src='https://i.ibb.co/F6TtKpG/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f.gif' alt="" />
  <div className="text">
    <h2 className='text-xl font-bold'>Our Schooling and Your Victory...</h2>
    <hr />

    <h3 className='mt-4'>We live in the age of Science and Technology. Without Technological knowledge no one can take his proper position in this modern world. Day by day the importance of the knowledge of science and tecnology is increasing. So, Take the IT knowledge and be advanced in today's world.Best wishes. Fiamanillah... </h3>
  </div>
</div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


{
    data1.data.map(data => <Topic key={data.id} data={data}></Topic>,)
}
</div>
      </div>
    );
};

export default QuizRoute;