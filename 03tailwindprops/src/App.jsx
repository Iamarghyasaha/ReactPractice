import './App.css';
import Card from './components/card';
function App() {
  return (
    <>
      <h1 className='bg-green-900 text-white p-5 rounded-xl mb-5'>tailwindcss test</h1>
      <Card className='mb-5' channel="Pai Logical" paraText = "This is my first para"/>
      <Card className='mb-5' channel = 'Arghya' paraText = "This is my Second para"/>
    </>
  )
}

export default App
