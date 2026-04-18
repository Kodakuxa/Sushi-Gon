import { useState } from 'react'
import Header from './components/Layout/Header'
import TodoPlatillos from './components/Platillos/TodoPlatillos';
import Cart from './components/Cart/Cart';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
// ErrorBoundary removed — SignUp rendered directly

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<SignUp />} />
          <Route path="/menu" element={<TodoPlatillos />} />
          <Route path="/*" element={<Navigate to="/menu" />} />

        </Routes>
      </main>
    </>
  )
}

export default App