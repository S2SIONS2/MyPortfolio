import './ModalCustom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import main from '../assets/RandomCypher.png'

const RandomCypher: React.FC = () => {
    return (
        <div className='RandomCypher PjModal'>
            <ul className='iconWrap'>
                <li className='web'>
                    <a href='http://randomcyphers.sionsdiary.site' target='_blank'>
                        <FontAwesomeIcon icon={faPager} />
                    </a>
                </li>
                <li className='gitHub'>
                    <a href='https://github.com/S2SIONS2/RandomCypher' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li> 
            </ul>
            <section className='row align-items-center justify-content-center pt-3 pb-3'>
                <div className='titleWrap'>
                    <h2 className='text-center'>사이퍼즈 랜덤 캐릭터 뽑기</h2>
                    <p className='text-center'>2024. 09. 24</p>
                </div>
            </section>
            <section>
                <ul className='slideWrap'>
                    <li className='slideImg'>
                        <img src={main} alt='slide image' />
                    </li>
                </ul>
            </section>
            <section className='info'>
                <p>
                    <span>URL: </span>
                    <a href='http://randomcyphers.sionsdiary.site' target='_blank'>http://randomcyphers.sionsdiary.site</a>
                </p>
                <p>
                    <span>소개: </span>
                    게임 중 캐릭터 선택을 랜덤으로 매칭해주는 웹사이트 입니다.
                </p>
                <p>
                    <span>개발 인원: </span>
                    2인
                </p>
                <p>
                    <span>담당 역할: </span>
                    기획, 프론트 개발, 퍼블리싱 (서버 배포 외 전체)
                </p>
                <p>
                    <span>사용 기술: </span>
                    React, Typescript, Open API, Bootstrap5, Scss
                </p>
            </section>
            <section>
                <h3>프로젝트 특징 및 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 네오플 오픈 API를 이용하여 캐릭터 랜덤으로 뽑기
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 뽑기 버튼으로 API 재호출 방지
                    </div>
                    <ul>
                        <li>API 호출 시 처음 접속시에만 호출</li>
                        <li>뽑기 버튼을 이용하여 다시 재호출 하지 않고 선택된 배열 내에서 다시 추출</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 로컬스토리지에 저장
                    </div>
                    <ul>
                        <li>로컬 스토리지에 입력된 이름을 저장하여 뽑기 시 다시 이름을 입력할 필요 X</li>
                        <li>로컬 스토리지에 인원수 저장</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        4. 캐릭터 복사하기 버튼
                    </div>
                    <ul>
                        <li>복사하기 버튼을 통해 뽑힌 캐릭터를 친구들과 공유</li>
                        <li>토스트 메시지를 통해 복사 여부를 확인</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>트러블 슈팅</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. Clipboard API가 동작하지 않음
                    </div>
                    <ul>
                        <li>문제: 해당 API는 https, local 환경에서만 동작하여 http인 웹 사이트에서 동작하지 않음</li>
                        <li>해결: react-copy-to-clipboard 라이브러리로 대체해서 사용</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default RandomCypher;