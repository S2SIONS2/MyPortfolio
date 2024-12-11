import './ModalCustom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import diary1 from '../assets/dialyDiaryBook.png';
// import diary2 from '../assets/dailyDiary.png';

const DailyDiary: React.FC = () => {
    return (
        <div className="DailyDiary PjModal">
            <ul className='iconWrap'>
                <li className='web'>
                    <a href='http://mydiary.sionsdiary.site/app' target='_blank'>
                        <FontAwesomeIcon icon={faPager} />
                    </a>
                </li>
                <li className='gitHub'>
                    <a href='https://github.com/S2SIONS2/DailyDiary' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li> 
            </ul>
            <section className='row align-items-center justify-content-center pt-3 pb-3'>
                <div className='titleWrap'>
                    <h2 className='text-center'>Dialy Diary</h2>
                    <p className='text-center'>2024. 09. 19 ~ ing</p>
                </div>
            </section>
            <section>
                <ul className='slideWrap'>
                    <li className='slideImg'>
                        <img src={diary1} alt='slide image' />
                    </li>
                </ul>
            </section>
            <section className='info'>
                <p>
                    <span>URL: </span>
                    http://mydiary.sionsdiary.site/app
                </p>
                <p>
                    <span>소개: </span>
                    독서록, 습관 트래커 및 목표 등을 기록하고 차트로 만들어 시각화하여 관리할 수 있는 나만의 다이어리 페이지 입니다.
                </p>
                <p>
                    <span>개발 인원: </span>
                    2인
                </p>
                <p>
                    <span>담당 역할: </span>
                    기획, 프론트 개발, 퍼블리싱
                </p>
                <p>
                    <span>사용 기술: </span>
                    React, Redux, Typescript, Restful API, Open API(Naver 책 검색 API), JSON-server, Bootstrap5, Scss, 반응형 웹
                </p>
            </section>
            <section>
                <h3>프로젝트 특징</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. Redux를 사용한 상태관리
                    </div>
                    <ul>
                        <li>toolkit 라이브러리를 사용하여 보다 간단한 코드 구현</li>
                        <li>호출하는 Open API 상태 관리</li>
                        <li>데이터 관리 API 상태 관리</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. Restful API를 활용한 리스트 REST 기능
                    </div>
                    <ul>
                        <li>Get, Post, Patch, Delete 기능 사용</li>
                        <li>달력의 일정(스케줄)과 할 일 목록(투 두 리스트)의 CRUD 기능 구현</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. Json-Server를 사용하여 Rest API 구축
                    </div>
                    <ul>
                        <li>/api/bookList: title, author, isbn, description, image 정보 저장</li>
                        <li>/api/calendar: id, date, schedule, toDoList</li>
                        <li>/api/diary: id, date, diaryTitle, emotion, description</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>주요 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 독서록
                    </div>
                    <ul>
                        <li>네이버 책 검색 API를 이용한 기록할 책 선택</li>
                        <li>책 리스트 표출 시 페이징을 통해 다량의 데이터 호출 방지 및 속도 개선</li>
                        <li>Restful API를 이용하여 독서록 게시물 저장, 수정, 삭제 관리</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 달력
                    </div>
                    <ul>
                        <li>달력 일정 추가 등 일정 관리</li>
                        <li>할 일 목록(To Do List) 관리</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 일기장
                    </div>
                    <ul>
                        <li>일기 쓰고 수정하고 삭제하기</li>
                        <li>감정, 날짜에 따른 일기 필터 기능</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>추가 예정 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 차트 페이지
                    </div>
                    <ul>
                        <li>달력의 할 일 목록(To Do List)을 항목별로 체크하여 습관 트래커로 활용</li>
                        <li>매달 한 달간의 할 일 목록을 통해 목표 달성률 확인</li>
                        <li>일기장의 한달 간의 감정을 차트로 시각화</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>트러블 슈팅</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. API 조건부 호출 문제
                    </div>
                    <ul>
                        <li>문제: 네이버 검색 API 사용 시 검색 파라미터 값이 없어도 계속해서 API가 호출 되며 에러 메시지가 출력됨</li>
                        <li>해결: Redux로 설정 했던 api slice 파일에서 파라미터가 있을 때만 API를 호출하도록 수정함</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. Typescript 사용으로 인한 타입 지정 오류
                    </div>
                    <ul>
                        <li>문제: API호출은 완료 됐으나, 타입 지정에 대한 에러 메시지가 계속 나타남</li>
                        <li>해결: API 값을 받아오고 사용할 때에도 값에 대한 타입 지정을 해줌</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 차트 페이지
                    </div>
                    <ul>
                        <li>문제: 얕은 복사의 수정 구현이 이루어져 중첩된 객체의 불변성이 깨짐</li>
                        <li>해결: 깊은 복사로 구조를 수정하여 컨텐츠 수정이 되게 변경</li>
                    </ul>
                </div>
            </section>
        </div>  
    )
}

export default DailyDiary;