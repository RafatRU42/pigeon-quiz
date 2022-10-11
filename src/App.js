import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Topic from './components/Topic/Topic';
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
      {path: '/',element: <Home></Home>},
      {path: '/home',loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home></Home>},
      {path: '/statistics',element: <Statistics></Statistics>},
      {path: 'topic', element: <Topic></Topic>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '/quiz', element: <Quiz></Quiz>},
    ]},
    {path:'*',element: <h1>Please Input a Valid URL</h1>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
