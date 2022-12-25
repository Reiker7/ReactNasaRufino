import { createBrowserRouter } from 'react-router-dom';
import E404 from './E404';
import App from '../page/App';
import Home from '../page/Home';
import Landing from '../page/Landing'
import PublicLayout from '../layouts/PublicLayout';
import Posts from '../page/Posts';
import PostsN from '../page/PostsN';
import CreatePost from '../page/CreatePost';
import CreatePostN from '../page/CreatePostN';
import UpdatePost from '../page/UpdatePost'
import UpdatePostN from '../page/UpdatePostN'

const router = createBrowserRouter([
      {
      path: '/',
      element: <PublicLayout />,
      errorElement: <E404 />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/app',
          element: <App />
        },
        {
          path: '/landing',
          element: <Landing />
          
        },
        {
          path: '/landing/list',
          element: <Posts  />
        },
        {
          path: '/landing/list/:postId',
          element: <UpdatePost  />
        },
        {
          path: '/landing/create',
          element: <CreatePost/>
        },
        {
          path: '/neas/create',
          element: <CreatePostN />
        },
        {
          path: '/neas/list',
          element: <PostsN />
        },
        {
          path: '/neas/list/:designatId',
          element: <UpdatePostN  />
        },
        
      ]
  
    },


  
  ]);

  export default router