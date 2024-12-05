import Navbar from './Components/Navbar.jsx';
import Work from './Components/Work.jsx';
import Stripes from './Components/Stripes.jsx'
import Products from './Components/Products.jsx';
import Marqees from './Components/Marqees.jsx';

function App() {
  return (
    <div className='w-full min-h-screen font-["Satoshi_variable"] bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marqees/>
    </div>
  )
}

export default App