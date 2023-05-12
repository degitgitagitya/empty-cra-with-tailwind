import { Link, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { useNavigate } from 'react-router-dom'

const SignIn = async () => {
  return {
    access_token: 'asda9whoejandaohscapje12j1oij1',
    username: 'Gitgit',
    id: 1,
  }
}

function App() {
  let navigate = useNavigate()

  const handleSubmit = async () => {
    const result = await SignIn()
    localStorage.setItem('access_token', result.access_token)
    navigate('/profile')
  }

  const handleLogout = async () => {
    localStorage.removeItem('access_token')
    navigate('/')
  }

  return (
    <div className='container mx-auto p-4'>
      <h1>Welcome to Ruangguru!</h1>

      <Link to='/'>Home Page</Link>

      <hr />

      <Link to='/about'>About Page</Link>

      <hr />
      <hr />
      <hr />

      <Routes>
        <Route
          path='/'
          element={
            <div>
              <input type='text' placeholder='username' />
              <button onClick={handleSubmit}>submit</button>
            </div>
          }
        />
        <Route path='about' element={<div>About</div>} />
        <Route
          path='profile'
          element={
            <ProtectedRoute>
              <div>Profile</div>
              <button onClick={handleLogout}>Logout</button>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
