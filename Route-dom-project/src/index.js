import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoutesFromElements,RouterProvider, Route, createBrowserRouter,} from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import About from './components/About'
import Creator from './components/Creator'
import Contact from './components/Contact'
import SingleCreator from './components/SingleCreator'
import Github,{GithubInfo} from './components/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='creator' element={<Creator/>}/>
      <Route path='github' element={<Github/>} loader={GithubInfo}/>
      <Route path='creator/:name' element={<SingleCreator/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
