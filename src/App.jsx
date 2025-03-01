import React from 'react'
import Login from './pages/Login'
import Login from './pages/Navbar'
import Login from './pages/Register'
import Login from './pages/HomePage'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
      setIsAuthenticated(false);
      const handleLogout = async () => {
        try {
            // Optionally call API to log out from the server
            await axios.post('/api/logout');
    
            // Clear the token from local storage or cookies
            localStorage.removeItem('token'); // or the name of your item you used for authentication
    
            // Update the authenticated state
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Logout failed", error); // Handle error appropriately
        }
    };
  };

  return (
    <div>
      <Navbar />
      <Login />
      <Register />
      <HomePage />
    </div>
  )
}

export default App;