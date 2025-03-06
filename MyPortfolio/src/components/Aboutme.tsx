import { useLayoutEffect, useRef } from 'react';
import './Aboutme.scss';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
    const titleRef1 = useRef<HTMLHeadingElement>(null)
    const titleRef2 = useRef<HTMLHeadingElement>(null)

    // 물결 + 통통 튀듯 한글자씩 진행하는 애니메이션 생성
    const createTextAnimation = (triggerElement: HTMLElement | null, triggerId: string) => {
        if (!triggerElement) return;

        const spans = triggerElement?.querySelectorAll("span");
        if(spans?.length === 0) return;
        if(spans) {
            gsap.set(spans, { y: 0 });
            ScrollTrigger.create({
                id: triggerId,
                trigger: triggerElement,
                start: "top 100%",
                onEnter: () => {
                    console.log(1)
                    console.log(triggerElement)
                    spans.forEach((span, index) => {
                        gsap.to(span, {
                            y: -15,                            
                            duration: 0.2,
                            delay: index * 0.1,
                            ease: "power1.out",
                            onComplete: () => {
                                gsap.to(span, {
                                    y: 0,
                                    duration: 0.2,
                                    ease: "bounce.out",
                                });
                            }
                        });
                    });
                }
            });
        }

    }

    useLayoutEffect(() => {
        // 각 제목에 대해 고유한 ID를 사용
        createTextAnimation(titleRef1.current, 'title1');
        createTextAnimation(titleRef2.current, 'title2');
        
        // 컴포넌트 언마운트 시 ScrollTrigger 제거
        return () => {
            ScrollTrigger.getById('title1')?.kill();
            ScrollTrigger.getById('title2')?.kill();
        };
    }, []);
    return (
        <div className="Aboutme Projects">
            <section>
                <h3 ref={titleRef1}>
                    {"실패를 두려워하지 않는 개발자".split("").map((char, index) => (
                        <span key={index} style={{ display: 'inline-block' }}>
                            {char === " " ? "\u00a0" : char}
                        </span>
                    ))}
                </h3>
                <p>
                    좋은 개발자는 누구나 알기 쉽고 이해하기 쉬운 코드를 구성하는 개발자라고 생각합니다. 퍼블리셔 신입으로 처음 근무하게 
                    되었을 때 백엔드 선임님이 작성하신 코드를 보고 놀랐습니다. <br />
                    초보자인 제가 보기에도 바로 이해가 갔기 때문이었습니다. 그 경험 이후 제가 생각하는 이상적인 개발에 대한 꿈, 지향점이 생겼습니다. 
                </p>
                <ul>
                    <li>
                        모르는 기능을  개발 할 때 코드를 이해하고 작성합니다.
                    </li>
                    <li>
                        프로젝트 개발 중, 완성 후에도 리팩토링을 늘 고민합니다.
                    </li>
                    <li>
                        다른 사람의 코드를 보며 제 코드와 비교합니다.
                    </li>
                    <li>
                        주석을 자세히 쓰려고 노력합니다.
                    </li>
                </ul>
            </section>
            <section className='plus_section'>
                <h4>
                    Plus. more me
                </h4>
                <p>
                    저는 그다지 능동적인 아이는 아니었습니다. 그저 하고 싶은 일이 없어 인문계 고등학교에 진학하고 수학이 어려워 문과를 
                    선택하며 대학 입시에 좌절하며 친구가 쓴 대학, 과를 선택하여 대학에 입학하였습니다.
                    다만, 나쁘지는 않았습니다. 좋은 것이 크게 없었던 것이 오히려 장점이 되어 식품영양학에 대해 즐겁게 수업을 들었습니다. 
                    <br />
                    하지만 영양사로 첫 커리어를 시작하자, 처음으로 제가 어렵다 느끼고 싫어하는 마음이 생겼습니다. 새로운 길을 고민하던 중 웹개발자 
                    친구의 근무 내용을 들으며 제 안의 기술적인 배움에 대한 열정을 깨달았습니다. 제 마음을 알아가는 그 과정에서 웹 퍼블리셔로서
                    웹 개발에 대한 매력에 더욱 빠졌고, 다시금 기술적인 한계를 느껴 웹 프론트엔드 개발에 도전하게 되었습니다.
                    <br />
                    다양한 경험은 저를 더욱 단단하게 만들어 주었습니다. 영양사로 근무하며 사람들을 이해하고 관리하는 법을 배웠고, 체계적인 일 처리
                    에 대한 중요성을 알게 해주었습니다. 그 후 새로운 길에 도전해 웹 퍼블리셔로서 자리 잡은 경험은 저 자신을 믿을 수 있는 큰 힘이 되었습니다.
                    퍼블리셔로 근무 당시 사용자 경험에 대해 고민하며 시각적으로 사람들의 마음을 사로잡고 기능적으로 완성도 높은 웹을 만드는데
                    집중하였고, 지금도 노력하고 있습니다.
                </p>
            </section>
            <section>
                <h3 ref={titleRef2}>
                    {"Work Experience".split("").map((char, index) => (
                        <span key={index} style={{display: 'inline-block'}}>
                            {char === ' ' ? '\u00a0' : char}
                        </span>
                    ))}
                </h3>
                <p>텍트원 - 퍼블리셔 근무</p>
                <ul>
                    <li>
                        <p className='sub_title'>🛠️ Git 적응기</p>
                        <p>
                            퍼블리셔로 근무할 당시, 회사에서는 SVN을 사용하고 있었습니다. 입사 전에 GitHub를 공부해 갔던 저에게는 SVN이 새로운 형상 관리 툴이었지만,
                            다행스럽게도 SVN은 GitHub보다 사용법이 비교적 간단하고 직관적이어서 빠르게 적응할 수 있었습니다.
                            <br />
                            그러나 약 1년 반 후, 프로젝트의 필요성에 따라 다시 Git을 사용하게 되었습니다. 당시 회사의 다른 개발자분들도 Git사용이 익숙하지 않아 어려움을 겪었습니다.
                            모두 함께 모여 회의실에서 Git을 공부하며 시간을 보냈습니다.
                            <br />
                            이 과정이 쉽지만은 않았습니다. 회사에서는 Eclipse를 사용하였는데, Eclipse 내부에서 Git을 확장하여 사용해 보거나, SourceTree를 통해 커밋을 시도했지만,
                            예상치 못한 오류에 쉽게 당황하곤 했습니다.
                            <br />
                            한번은 Git 사용법을 잘 아는 친구에게 물어봤더니, 친구가 우스갯 소리로 "그냥 커밋 누르고 기도하면 돼" 라는 농담을 했었는데, 나중에야 그 말의 의미를 절실히 깨달았습니다.
                            익숙하지 않았던 Google Cloud의 UI도 Git사용의 어려움을 더욱 증폭시켰습니다. 
                            분명히 패치와 풀을 진행하여 소스를 다운받았는데도, 사라져버린 코드를 보고 당황했던 경험도 여러번 있었습니다.
                            <br />
                            이러한 업무 외에도, 주말에는 개인적으로 Git을 더 깊이 공부하며 실력을 키워갔습니다. Git활용 시나리오를 테스트해 보고, 문서를 통해 기능을 익혔습니다.
                            이러한 추가 학습이 실무에서 큰 도움이 되었습니다.
                            <br />
                            이 과정 속에서, 저는 새로운 것을 배우는 즐거움을 다시금 느낄 수 있었고, 동료들과 서로의 상황을 이해하며 Git에 대해 차근차근 배워 나갈 수 있었습니다.
                            이런 경험은 단순히 Git에 대해 배우는 것이 아닌, 협업 속에서 서로의 어려움을 이해하며 극복하는 방법을 배울 수 있어 뜻깊은 시간이었습니다.
                        </p>
                    </li>
                    <li>
                        <p>🖥️ 사용자에 맞는 UI / UX 구성하기</p>
                        <p>
                            처음 웹에 대해 배울 때, 학원에서 UI에 대해 강의를 들었습니다. 당시 강사님께서 강조하시기를 '하얀색(#fff)와 검은색(#000)의 사용을 자제하라.'는 것이었습니다.
                            순수한 흰색과 검은색은 실제 화면에서 눈이 부시고 글자가 지나치게 까맣다고 느껴질 수 있다는 것이었습니다.
                            <br />
                            이러한 배움을 가지고 퍼블리셔로서 근무를 시작하였지만, 실제 현장은 예상과는 많이 달랐습니다. 제가 근무한 회사는 스마트 팩토리를 다루던 곳으로, 
                            공장 화면에서 UI를 사용하는 경우가 많았습니다. 공장 특성 상 바쁜 현장에서 근무하시는 분들은 짧은 시간에도 정보를 명확히 파악할 수 있어야 했습니다.
                            자연스럽게 "글자를 크게, 까맣게, 멀리서 봐도 한 눈에 확 보이게" 라는 요구를 듣거나 "오류 메시지는 빨갛게 띄워달라"는 요청을 자주 받았습니다.
                            디자인의 미적인 요소보다는 직관성과 가독성을 최우선으로 원했던 것입니다.
                            <br />
                            이 경험을 통해 저는 단순히 UI를 아름답게 만든는 것이 아니라, 사용자의 환경과 필요에 맞는 UI 구현이 얼마나 중요한 것인지 깨달았습니다.
                            학원에서 배운 일반적인 웹사이트와는 달리 현장에서 필요한 실용적인 UI 사이에서 균형을 맞추는 법을 배웠습니다.
                            결국 UI/UX 디자인은 사용자의 경험을 개선하는 것인, 그 본질을 놓치지 않으려고 노력하고 있습니다.
                        </p>
                    </li>
                    <li>
                        <p>🚀 최신 CSS 활용의 깨달음</p>
                        <p>
                            처음 CSS를 배울 때는, 기능을 구현하는 데 있어 한계가 많다고 느꼈습니다. class나 id로 하나씩 지정하며 스타일을 적용하는 과정은 번거롭다 느껴졌고,
                            자연스럽게 javascript나 J-query를 사용해 기능을 구현하게 되었습니다.
                            <br />
                            하지만 이러한 방식은 실무에서 백엔드 개발자와의 협업 중 파일이 겹쳐 오류가 발생하는 원인이 되기도 했습니다.
                            이러한 문제를 해결하기 위해 고민 하던 중, 인터넷을 통해 제가 느꼈던 CSS의 한계는 CSS가 아닌 저의 지식의 한계였다는 것을 깨달았습니다.
                            CSS는 꾸준히 발전하고 있었고, 이미 다양한 기능이 추가된 상태였습니다. 예를 들어:
                            - **:has()**와 :where() 같은 새로운 CSS 선택자를 통해 스타일 지정이 훨씬 간편해졌고,
                            - Media Query에 의존하지 않고, Container Query를 통해 컨테이너 크기에 따라 반응형 스타일을 적용할 수 있게 되었습니다.
                            <br />
                            이는 기존에 JavaScript로 여러 줄의 코드를 구현했던 방식과 달리 CSS에서는 한줄로 해결할 수 있다는 점에서 저에게는 충격으로 다가왔습니다.
                            이 경험을 통해, 이미 알고 있다고 자만하지 않고, 새로운 기술을 꾸준히 학습하는 것이 얼마나 중요한지 깨달았습니다.
                            그 이후로도 새로운 기술에 대한 기사, 블로그 포스팅, 유튜브 영상 등을 지나치지 않고 살펴보려 노력하고 있습니다.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Aboutme;