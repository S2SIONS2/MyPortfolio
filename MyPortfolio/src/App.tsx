import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import Calendar from './components/Calendar';
import Cursor from './components/Cursor';
import Snow from './components/Snow';
import Clock from './components/Clock';
import Application from './components/Application';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  return (
    <div className='App'>
      <div className='snowman'></div>
      <div className='snowWrap'>
        {[...Array(220)].map((_, index) => (
            <Snow key={index} className={`Snow-${index + 1}`} />
        ))}
      </div>
      {/*왼쪽 앱 영역*/}
      <div className='appWrap'>
        <Application icon={faAddressCard} name={'이력서'}/>
      </div>
      {/*오른쪽 영역*/}
      <article className='calendarWrap p-0 m-0 g-0'>
        <div className='p-0 m-0 g-0 w-auo'>
          <Clock />
        </div>
        <div className='p-0 m-0 g-0 w-auto'>
          <Calendar />
        </div>
      </article>
      <Cursor />
    </div>
  )
}

export default App;
