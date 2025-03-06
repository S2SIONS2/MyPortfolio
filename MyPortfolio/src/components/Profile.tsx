import './Profile.scss';
import profileImg from '../assets/myProfile.jpeg'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    // const reactToPrintFn = useReactToPrint({
    //     content: () => contentRef.current,
    //     documentTitle: '프론트엔드 이시온 이력서', // 파일 이름 설정
    //     onAfterPrint: () => alert('프린트가 완료되었습니다.'), // 프린트 후 콜백
    // });

    return (
        <div className="Profile">                            
            <div className='btnWrap'>
                <button className='printBtn' type='button' onClick={() => reactToPrintFn?.()}>
                    <FontAwesomeIcon icon={faPrint} />
                </button>
            </div>
            <div ref={contentRef}>
                <section className='personalProfile'>   
                    <div className='leftArea'>
                        <img src={profileImg} alt='profile image'/>
                    </div>
                    <div className='rightArea'>
                        <h2 className='mb-5'>이시온</h2>
                        <p>
                            약 2년간 퍼블리셔로 근무하며 사용자 중심의 편의성을 최우선으로 고려해 왔습니다. 
                        </p>
                        <p>
                            새로운 기술과 방법론을 지속적으로 학습하고 이를 실무에 적용하여 사용자의 경험을 개선하는 데 기여해왔습니다. 
                        </p>
                        <p className='mb-5'>
                            효율적이고 이해하기 쉬운 코드 작성에 집중하며, 동료들과의 원활한 의사소통을 통해 협업을 최우선으로 생각합니다.
                        </p>
                        <p className='row'>
                            <span className='fw-bold w-auto'>주소:</span>
                            경기도 안산시 상록구 일동
                        </p>
                        <p className='row'>
                            <span className='fw-bold w-auto'>전화번호:</span>
                            010-2371-1933
                        </p>
                        <p className='row'>
                            <span className='fw-bold w-auto'>이메일:</span>
                            chasio100@naver.com
                        </p>
                    </div>
                </section>
                <section className='education'>
                    <div className='leftArea'>
                        <h4>학력</h4>
                    </div>
                    <div className='rightArea'>
                        <div className='row'>
                            <div className='col-2'>대학교</div>
                            <div className='col-4'>한국 방송통신대학교</div>
                            <div className='col-3'>식품영양학과</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>대학교</div>
                            <div className='col-4'>안산대학교</div>
                            <div className='col-3'>식품영양과</div>
                        </div>
                    </div>
                </section>
                <section className='career'>
                    <div className='leftArea'>
                        <h4>경력 및 경험</h4>
                    </div>
                    <div className='rightArea'>
                        <div className='row'>
                            <h5 className='w-auto m-0 p-0 g-0'>(주)텍트원 - 퍼블리셔</h5>
                            <p className='w-auto'>: 2022.06 ~ 2024.03</p>
                        </div>
                        <details open>
                            <summary>[LG 스마트 팩토리 기반 공장 대시보드] - 백엔드 2명, 퍼블리셔 1명</summary>
                            <ul>
                                <li>공장 대시보드 화면 퍼블리싱</li>
                                <li>애니메이션을 이용한 알람 표시</li>
                                <li>HTML, CSS, J-Query를 이용한 화면 퍼블리싱</li>
                                <li>최신 CSS 문법을 사용하여 스크립트 최소화</li>
                                <li>반응형 웹사이트 및 크로스 브라우징 구현</li>
                                <li>기존 틀을 이용한 웹 화면 디자인</li>
                                <li>도면 수정 및 이미지 편집</li>
                                <li>차트 및 그래프 퍼블리싱</li>
                                <li>Print Css 경험이 있습니다.</li>
                            </ul>
                        </details>
                        <details>
                            <summary>[LG Praicam Cloud] - 백엔드 2명, 퍼블리셔 1명</summary>
                            <ul>
                                <li>HTML, CSS, J-Query를 이용한 화면 퍼블리싱</li>
                                <li>최신 CSS 문법을 사용하여 스크립트 최소화</li>
                                <li>반응형 웹사이트 및 크로스 브라우징 구현</li>
                                <li>웹 표준화 및 웹 접근성 준수</li>
                                <li>이메일 폼 퍼블리싱</li>
                            </ul>
                        </details>
                        <details>
                            <summary>[LG Praicam] - 백엔드 2명, 퍼블리셔 1명</summary>
                            <ul>
                                <li>HTML, CSS, J-Query를 이용한 화면 퍼블리싱</li>
                                <li>최신 CSS 문법을 사용하여 스크립트 최소화</li>
                                <li>반응형 웹사이트 및 크로스 브라우징 구현</li>
                                <li>객체 사이즈에 따라 달라지는 알람 화면 구현</li>
                            </ul>
                        </details>
                        <details>
                            <summary>[LG 양극재] - 백엔드 2명, 퍼블리셔 1명</summary>
                            <ul>
                                <li>HTML, CSS, J-Query를 이용한 화면 퍼블리싱</li>
                                <li>최신 CSS 문법을 사용하여 스크립트 최소화</li>
                                <li>반응형 웹사이트 및 크로스 브라우징 구현</li>
                                <li>이미지 배경 제거 및 웹 화면 디자인</li>
                                <li>도면 위 알람 영역 표시</li>
                                <li>차트 및 그래프 퍼블리싱</li>
                            </ul>
                        </details>
                    </div>
                </section>
                <section className='license'>
                    <div className='leftArea'>
                        <h4>자격증</h4>
                    </div>
                    <div className='rightArea'>
                        <ul className='p-0'>
                            <li className='mb-2'>컴퓨터 활용 능력 2급</li>
                            <li className='mb-2'>영양사</li>
                            <li className='mb-2'>위생사</li>
                            <li>식품 산업 기사</li>
                        </ul>
                    </div>
                </section>
                <section className='skills'>
                    <div className='leftArea'>
                        <h4>핵심 역량</h4>
                    </div>
                    <div className='rightArea'>
                        <h3 className='sub_title'>Language</h3>
                        <details open>
                            <summary> HTML5 / CSS3 </summary>
                            <ul>
                                <li>웹 표준화와 웹 접근성을 고려합니다.</li>
                                <li>애니메이션 키프레임을 이용한 애니메이션을 작업 할 수 있습니다.</li>
                                <li>이메일 폼 퍼블리싱 경험이 있습니다.</li>
                                <li>최신 CSS 문법을 사용하여 스크립트 사용 최소화를 지향합니다.</li>
                                <li>부트스트랩을 사용할 수 있습니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary> Javascript / J-Query </summary>
                            <ul>
                                <li>자바스크립트의 경우 ES6 문법 사용을 선호합니다.</li>
                                <li>J-Query  사용 경험이 있습니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary> Typescript </summary>
                            <ul>
                                <li>Interface와 Type의 차이에 대해 알고 있습니다.</li>
                                <li>Typescript를 이용하여 자바스크립트를 대체할 수 있습니다.</li>
                                <li>React, Next 환경에서 Typescript로 코드를 작성할 수 있습니다.</li>
                            </ul>
                        </details>
                        <h3 className='sub_title'>FrameWork & Library</h3>
                        <details open>
                            <summary> React </summary>
                            <ul>
                                <li>CRA보다 VITE 환경에서 리액트 작업을 선호 합니다.</li>
                                <li>Javascript, Typescript를 사용합니다.</li>
                                <li>함수형 스크립트를 사용합니다.</li>
                                <li>React Hooks를 통해 상태 관리와 정보를 전달 받을 수 있습니다.</li>
                                <li>Redux를 이용하여 상태를 관리합니다.</li>
                                <li>Restful API를 이용한 CRUD 작업을 진행합니다.</li>
                                <li>JWT를 이용한 로그인 구현 경험이 있습니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary> Next </summary>
                            <ul>
                                <li>Page Router에 대한 기본적인 이해가 있습니다.</li>
                                <li>App Router를 통한 프로젝트를 개발 경험이 있습니다.</li>
                                <li>Dynamic 동적 페이지 개발 경험이 있습니다.</li>
                                <li>Supabase를 이용한 API 통신 경험이 있습니다.</li>
                                <li>Zustand를 활용한 상태 관리 경험이 있습니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary>SUPABASE</summary>
                            <ul>
                                <li>테이블 설계 및 API를 연결하여 사용합니다.</li>
                                <li>Real-time 기능을 통해 테이블의 실시간 변화에 즉각적으로 대응합니다.</li>
                                <li>인증 기능을 사용하여 로그인을 구현합니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary>GSAP</summary>
                            <ul>   
                                <li>인터렉티브한 웹을 구현하기 위해 사용합니다.</li>
                                <li>이미지 페이드 인 / 아웃 경험이 있습니다.</li>
                                <li>다양한 텍스트 표현 방식을 구사합니다.</li>
                                <li>반응형 슬라이드를 구현합니다.</li>
                            </ul>
                        </details>
                        <h3 className='sub_title'>ETC</h3>
                        <details open>
                            <summary> Figma </summary>
                            <ul>
                                <li>피그마: 간단한 이미지 편집 등의 작업이 가능합니다.</li>
                                <li>제플린: css와 디자인 확인 및 이미지 다운이 가능합니다.</li>
                            </ul>
                        </details>
                        <details open>
                            <summary> Git </summary>
                            <ul>
                                <li>깃허브. 구글 클라우드를 이용하여 형상 관리가 가능합니다.</li>
                                <li>페이지에 따른 feature 브랜치 환경에서 하는 작업을 선호합니다.</li>
                            </ul>
                        </details>
                    </div>
                </section>
                <section className='coverLetter'>
                <div className='leftArea'>
                        <h4>자기소개서</h4>
                    </div>
                    <div className='rightArea'>
                        <details className='mb-2'>
                            <summary> 항상 전진하는 웹퍼블리셔의 프론트엔드 전환기 </summary>
                            <div>
                                웹 퍼블리셔로서 다양한 퍼블리싱 경험을 보유한 저는 이제 나아가 화면만 존재하는 페이지가 아니라 실제로 작동할 수 있는 페이지를 제작하고 싶어졌습니다. 
                                근무 중 최신 CSS 기술을 활용하여 자바스크립트 의존성을 낮추며 직무에 대한 꾸준한 공부와 관심의 중요성을 깨달았습니다. 
                                고객 요구사항을 반영한 사용자 친화적인 인터페이스 설계와 구현하는 것에 대한 즐거움을 가지고 있습니다. 
                                반응형 웹사이트와 크로스 브라우징 이슈에 대해 고민하며 화면을 퍼블리싱 하였습니다. 
                                약 2년간의 업무 경험을 통해 문제해결 능력과 의사소통 능력의 중요성을 깨닫고, 향상시키기 위해 노력하고 있습니다.
                            </div>
                            <div>
                                새로운 기술에 대한 열정과 끊임없는 도전으로 더 나은 사용자 경험을 제공하기 위해 노력하고 싶습니다. 
                                지난 약 1년간 React와 Typescript 및 Next에 대한 공부를 꾸준히 하고 있습니다.
                                협업을 통해 팀원들과의 원활한 의사소통으로 함께 프로젝트를 성공적으로 이끌어내는데 기여하고 싶습니다. 
                                다양한 프로젝트 경험을 통해 문제해결 능력과 아이디어를 발휘하여 근무해왔습니다. 
                                책임감을 가지고 일에 임하며, 항상 성장을 추구하고 있습니다.
                            </div>
                        </details>
                        <details className='mb-2'>
                            <summary> 끊임없는 도전을 통해 성장하는 내 안의 힘 </summary>
                            <div>
                                처음 제 전공이었던 영양사를 그만두고 개발자의 길을 선택할 때 주변의 우려가 많았습니다.
                                하지만 불도저 같은 추진력으로 제가 원하는 길을 찾기 위해 새로운 도전을 결심했습니다.
                                그 결과, 웹 퍼블리셔로서의 경험을 쌓으면서 프론트엔드 개발자로의 꿈을 키우게 되었습니다.
                                이러한 경험을 통해 끊임없는 도전을 통해 성장하는 것이 얼마나 중요한지 깨달았습니다.
                            </div>
                            <div>
                                새로운 것을 좋아하며 안주하지 않고 도전하는 것을 즐기는 저는, 프론트엔드 개발자로서의 역량을 키우기 위해 끊임없이 노력하고 싶습니다. 
                                항상 호기심 가득한 마음으로 다양한 기술을 습득하며 성장하는 것을 즐기고, 
                                외향적인 성격 덕분에 새로운 환경에서도 긍정적으로 적응하며 동료들과 소통하는 것을 즐깁니다. 
                                배우는 것을 두려워하지 않고 도전하는 자세를 가지고 있어, 프로젝트를 통해 스스로를 발전시키고자 노력합니다.
                            </div>
                            <div>
                                이처럼 저는 기술적인 스킬뿐만 아니라, 팀워크와 커뮤니케이션 능력을 동시에 갖춘, 
                                다재다능한 개발자로 성장하기 위해 노력하고 있습니다. 
                                새로운 기술을 배우고, 프로젝트에 적용하며, 동료들과의 협력을 통해 이루어내는 성과는 제게 끊임없는 동기부여가 되고 있습니다. 
                                앞으로도 이러한 성장과 발전을 지속하며, 더 많은 도전을 통해 더 넓은 세계를 경험하고 싶습니다.
                            </div>
                        </details>
                        <details className='mb-2'>
                            <summary> 글로벌 트렌드를 선도하는 프론트엔드 개발자로의 도약 </summary>
                            <div>
                                프론트엔드 개발 분야에서, 저는 빠르게 변화하는 기술 트렌드를 민첩하게 파악하고 적용하는 능력을 보유하고 싶습니다. 
                                앞으로는 영어 능력을 활용해 전 세계의 최신 정보와 기술을 신속히 습득하고, 문제 해결 과정에 깊이 있게 접근하고 싶습니다. 
                                이는 제가 퍼블리셔로 근무하며 쌓은 경험에서 비롯된 것으로, 프론트엔드 개발에 대한 깊이 있는 이해와 새로운 시각을 제공하고 싶습니다.
                            </div>
                            <div>
                                이러한 기반 위에서, 저는 자신의 기술적 역량과 글로벌 커뮤니케이션 능력을 지속적으로 확장시키고 싶습니다. 
                                제 전문성과 다양한 경험을 바탕으로, 저는 프론트엔드 개발 분야에서 글로벌 트렌드를 선도하는 개발자로의 새로운 도약을 준비하고 있습니다.
                                첫째, 오픈 소스 프로젝트를 통해 다양한 프로젝트를 경험하겠습니다.
                                둘째, 화상 영어 회화를 통해 영어 실력을 상승시키겠습니다.
                                셋째, React 라이브러리에 대한 심층 학습을 통해, 다양한 프로젝트에 적용할 수 있는 능력을 갖추고자 합니다.

                                이 과정에서 얻게 될 새로운 지식과 경험은 저를 더욱더 성장시키는 원동력이 될 것이며, 이를 통해 더 넓은 세계로 나아갈 준비를 하고 있습니다.
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile;