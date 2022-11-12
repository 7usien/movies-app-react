import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './images/RootLayout';
import IndexList from './pages/IndexList';
import Details from './pages/Details';
import SearchResult from './pages/SearchResult';

const router = createBrowserRouter([
 {
  path: '/',
  element: <RootLayout />,
  errorElement: <h1>Error page</h1>,

  children: [
   {
    index: true,
    element: <IndexList />,
   },
   {
    path: ':id',
    element: <Details />,
   },
   {
    path: 'search',
    element: <SearchResult />,
   },
  ],
 },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}>
  <App />
 </RouterProvider>
);
