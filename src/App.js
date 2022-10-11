import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Topic from './components/Topic/Topic';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
      {path: '/',element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/statistics',element: <Statistics></Statistics>},
      {path: 'topic', element: <Topic></Topic>},
      {path: '/blog', element: <Blog></Blog>}
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
