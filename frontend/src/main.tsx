import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import PostsList from './pages/PostsList.tsx';
import Errorpage from './pages/ErrorPage.tsx';
import PostDetail from './pages/PostDetail.tsx';
import Home from './pages/Home.tsx';
import AddPost from './pages/AddPost.tsx';
import SignUp from './features/auth/Signup.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'posts', element: <PostsList /> },
      { path: 'posts/:postId', element: <PostDetail /> },
      { path: 'create', element: <AddPost /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
