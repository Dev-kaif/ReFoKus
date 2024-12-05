import Navbar from './Components/Navbar.jsx';
import Work from './Components/Work.jsx';
import Stripes from './Components/Stripes.jsx'

function App() {
  return (
    <div className='w-full min-h-screen font-["Satoshi_variable"] bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App