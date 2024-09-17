
import './App.css'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import RecipeList from './pages/recipes'
import CommentsList from './pages/comments'
import RecipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './component/layout'
import ReactHooksExamplePage from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import UseMemoExample from './pages/use-memo'
import UseCallbackExample from './pages/use-callback'
import ReactQueryDemo from './pages/react-query'

function CustomRoutes() {
  const element = useRoutes([
    {
      path : '/home', 
      element: <Layout />,
      children : [
          {path : 'recipe-list', element : <RecipeList/>},
          {path : 'comments-list', element : <CommentsList/>},
          {path : 'recipe-list/:id', element : <RecipeDetailsPage/>}
      ],
    },
    {path : '*', element : <NotFoundPage/>},
    {path : '/react-hook-form', element: <ReactHooksExamplePage/>},
    {path : '/hooks', element : <Hooks/>},
    {path : '/use-memo', element : <UseMemoExample/>},
    {path : '/use-callback', element : <UseCallbackExample/>},
    {path : '/react-query', element : <ReactQueryDemo/>},
  ]);
  return element;
}

function App() {

  const navigate = useNavigate()
  return (
    <div>
      {/* <h1>React Routing, Custom hooks and more</h1>
      <div>
        <Link to={'/home/recipe-list'}>
          Alternative way of navigating to recipe list page</Link>
      </div>
      <button onClick={() => navigate('/home/recipe-list')} style={{ backgroundColor: "black", color: 'white', marginRight: '15px' }}>
        navigate to Recipe List Page</button>
      <button onClick={() => navigate('/home/comments-list')} style={{ backgroundColor: "black", color: 'white' }}>
        navigate to Comments List Page</button> */}
      {/* <Routes>
        <Route path='/home' element={<Layout />}>
          <Route path='recipe-list' element={<RecipeList />} />
          <Route path='comments-list' element={<CommentsList />} />
          <Route path='recipe-list/:id' element={<RecipeDetailsPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes/>
    </div>
  )
}

export default App
