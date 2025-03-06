import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import Calendar from './components/Calendar';
import Cursor from './components/Cursor';
import Snow from './components/Snow';
import Clock from './components/Clock';
import Application from './components/Application';

import Profile from './components/Profile';
import Projects from './components/Projects';

import { faAddressCard, faFolderOpen, faT, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import Aboutme from './components/Aboutme';

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
        <Application iconImg={faCircleUser} name={'이시온?'} modalName={Aboutme} />
        <Application iconImg={faAddressCard} name={'이력서'} modalName={Profile}/>
        <Application iconImg={faFolderOpen} name={'프로젝트'} modalName={Projects} />
        <Application iconImg={faT} name={'블로그'} url={'https://deer-develope-diary.tistory.com/'}/>
        <Application iconImg={faGithub} name={'깃허브'} url={'https://github.com/S2SIONS2'}/>
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
