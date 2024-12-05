import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Snow from './components/snow';

function App() {
  
  return (
    <div className='App'>
      <div className='snowman'></div>
      {[...Array(220)].map((_, index) => (
           <Snow key={index} className={`Snow-${index + 1}`} />
      ))}
      {/* <Snow /> */}
    </div>
  )
}

export default App;
