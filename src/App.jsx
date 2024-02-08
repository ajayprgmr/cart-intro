// components
import Navbar from './navbar'
import CartContainer from './cartcontainer'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main className='loadder-container'>
        <div className='loading'></div>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
