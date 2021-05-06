import React from "react";

import styles from "../stylesheets/Sections.module.css";
import {BrowserRouter, Redirect} from "react-router-dom";
import Projects from "./Projects";

import twitter_bg from "../resources/images/twitter/twitter_photo_bg.png";
import twitter_mo from "../resources/images/twitter/twitter_photo_mo.png";
import twitter_nostalgia from "../resources/images/twitter/twitter_photo_nostalgia.png";
import twitter_ck from "../resources/images/twitter/twitter_photo_ck.png";
import twitter_mc from "../resources/images/twitter/twitter_photo_mc.png";

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.PATH_NORMAL = "";
        this.PATH_TWITTER = "twitter";

        this.state = {
            type: props.match.params.type,
            visible_type: props.match.params.type,
            indicator_width: 50,
            indicator_pos: 20,
            indicator_color: "#e26417"
        }

        this.ref_tab_normal = React.createRef();
        this.ref_tab_twitter = React.createRef();

        this.onSectionControllerItemSelected = this.onSectionControllerItemSelected.bind(this);
    }

    componentDidMount() {
        this.setState(this.state.type === this.PATH_TWITTER ? {
            indicator_width: this.ref_tab_twitter.current.offsetWidth,
            indicator_pos: this.ref_tab_twitter.current.offsetLeft,
            indicator_color: "#1DA1F2"
        } : {
            indicator_width: this.ref_tab_normal.current.offsetWidth,
            indicator_pos: this.ref_tab_normal.current.offsetLeft,
            indicator_color: "#e26417"
        });
    }

    render() {

        return (
            <div>

                <BrowserRouter>
                    <Redirect to="/"/>
                </BrowserRouter>

                <div className={styles.SectionController}>

                    <div className={styles.SectionControllerItemGroup}>

                        <div ref={this.ref_tab_normal}
                             className={styles.SectionControllerItem} onClick={(event) => {
                            this.onSectionControllerItemSelected(event, this.PATH_NORMAL, "#e26417")
                        }}>
                            <div className={styles.SectionControllerItemText}
                                 style={{opacity: this.state.type === this.PATH_NORMAL ? 1 : 0.5}}>메인
                            </div>
                        </div>

                        <div ref={this.ref_tab_twitter}
                             className={styles.SectionControllerItem} onClick={(event) => {
                            this.onSectionControllerItemSelected(event, this.PATH_TWITTER, "#1da1f2");
                        }}>
                            <div className={styles.SectionControllerItemText}
                                 style={{opacity: this.state.type === this.PATH_TWITTER ? 1 : 0.5}}>트위터에서 오셨나요?
                            </div>
                        </div>

                    </div>

                    <div className={styles.SectionControllerIndicator}
                         style={{
                             width: this.state.indicator_width + "px",
                             backgroundColor: this.state.indicator_color,
                             left: this.state.indicator_pos - 20 + "px"
                         }}/>
                </div>

                <div className={styles.Sections}>

                    <div className={[
                        styles.NormalSection,
                        styles.Section,
                        this.state.animating ? styles.SectionAnimating : "",
                        this.state.animating ?
                            (this.state.type === this.PATH_NORMAL ? styles.FirstSectionShow : styles.FirstSectionHide) :
                            (this.state.type === this.PATH_NORMAL ? styles.FirstSectionVisible : styles.FirstSectionInvisible)
                    ].join(" ")}>

                        <div className={styles.SectionTitle}>
                            <span>처음 뵙겠습니다?...</span>
                        </div>

                        <div className={styles.SectionContent}>
                            99년생, {new Date().getFullYear()}년 현재 {new Date().getFullYear() - 1999 + 1}살인 남학생입니다.<br/>
                            관심가는 이것 저것을 살펴보고 있어요.
                        </div>

                        <div style={{height: "20px"}}/>

                        <div className={styles.SectionTitle}>
                            <span>아앗...지금 뭐하시는??!</span>
                        </div>

                        <div style={{marginTop: "5px"}} className={styles.SectionSubtitle}>코딩을 하고 있습니다.</div>

                        <div className={styles.SectionContent}>
                            여러 분야의, 여러 언어로 코딩을 합니다.<br/>
                            자세한 사항은 다음 영역을 살펴봐주세요!<br/>
                        </div>

                        <div className={styles.SectionSubtitle}>공부를 하고 있습니다.</div>

                        <div className={styles.SectionContent}>
                            컴퓨터공학과 학사과정을 진행 중인 남학생입니다.<br/>
                            아마 곧 대학원에 진학하게 될 것 같습니다.<br/>
                            취미생활로 고등학교의 생명과학 II 과목도 학생때부터 지금까지 공부하고 있습니다. 매년 9월 평가원과 수능이 출제되면 풀어보고 있어요.
                        </div>

                        <div className={styles.SectionSubtitle}>게임을 하고 있습니다.</div>

                        <div className={styles.SectionContent}>
                            마인크래프트를 즐겨합니다. <br/>
                            모바일/아케이드 리듬게임도 정말 가끔이지만 하는 편입니다.
                        </div>

                        <div style={{height: "20px"}}/>

                        <div className={styles.SectionTitle}>
                            <span>코딩이라... 할 줄 아시는건 있는지?</span>
                        </div>

                        <div className={styles.SectionContent}>
                            아래는 한 번이라도 다뤄본 적 있는 분야들입니다. 아직 능숙하지 않거나 더 공부가 필요한 분야는 회색으로 표현했습니다.
                            <ul style={{marginTop: "10px"}} className={styles.Ability}>
                                <li>
                                    <span>웹 프론트엔드</span>
                                    <p>2018년 말에 시작한, 가장 활발하게 공부중인 분야.</p>
                                    <ul>
                                        <li>HTML / CSS</li>
                                        <li>Javascript - JQuery, KotlinJS, <span style={{opacity: .5}}>React, TypeScript</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>웹 백엔드 및 데이터베이스</span>
                                    <p>다뤄보기는 했으나 기초적인 지식만 갖췄음</p>
                                    <ul className={styles.ContainsNarrowItem}>
                                        <li style={{width: "100%"}}>AWS EC2 Linux Instance 다루기</li>
                                        <li className={styles.NarrowListItem}>NodeJS</li>
                                        <li className={styles.NarrowListItem}>mySQL</li>
                                        <li style={{opacity: .5}} className={styles.NarrowListItem}>jsp</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Android Native (Java/Kotlin)</span>
                                    <p>4.1 시절에 본격적으로 공부하기 시작한 분야.</p>
                                </li>
                                <li>
                                    <span>Unity</span>
                                    <p>2017년 초에 접한 분야로, 3D보다 2D를 다루는데 더 익숙함</p>
                                </li>
                                <li>
                                    <span>마인크래프트</span>
                                    <p>2020년에 시작한 분야로, kotlin으로 작업 중</p>
                                    <ul className={styles.ContainsNarrowItem}>
                                        <li style={{width: "60%"}}>서버 플러그인 [Spigot(Bukkit)]</li>
                                        <li className={styles.NarrowListItem}>커맨드</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>머신러닝</span>
                                    <p>2020년 말에 시작한 분야.</p>
                                    <ul className={styles.ContainsNarrowItem}>
                                        <li className={styles.NarrowListItem}>python</li>
                                        <li className={styles.NarrowListItem} style={{opacity: .5}}>tensorflow 2.0</li>
                                        <li className={styles.NarrowListItem} style={{opacity: .5}}>keras</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div style={{height: "20px"}}/>

                        <div className={styles.SectionTitle}>
                            <span>증거!!!!!</span>
                        </div>

                        <div className={styles.SectionContent}>
                            아래는 작업했던 프로젝트들 중 일부입니다. 아직 git의 사용이 능숙한 편은 아니라서 소스코드를 확인할 수 있는 프로젝트가 얼마 없습니다...
                            <Projects/>
                        </div>

                    </div>

                    <div className={[
                        styles.TwitterSection,
                        styles.Section,
                        this.state.animating ? styles.SectionAnimating : "",
                        this.state.animating ?
                            (this.state.type === this.PATH_TWITTER ? styles.SecondSectionShow : styles.SecondSectionHide) :
                            (this.state.type === this.PATH_TWITTER ? styles.SecondSectionVisible : styles.SecondSectionInvisible)
                    ].join(" ")}>

                        <div className={styles.SectionTitle}>
                            <span>트친소를 위한 모든 것,</span><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>여기에서 확인하세요!</span>
                        </div>

                        <div className={styles.SectionSubtitle}>기본 사항</div>

                        <div className={styles.SectionContent}>
                            <ul>
                                <li>99년생, {new Date().getFullYear()}년 현재 {new Date().getFullYear() - 1999 + 1}살인
                                    남학생입니다.
                                </li>
                                <li>엄밀히 말하면 대학생은 아니고 유사대학생인데, <del>뭔가 잘못되어서</del> 대학원에 진학하게 될 것 같습니다...
                                </li>
                                <li>호모 놈인데, 순도 100%라고 하기엔 또 애매하지만 암튼 대충 그렇다고 생각해주세요. 자세한 사항이 궁금하시면, 물어봐주시면 정확하게
                                    답해드립니다.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.SectionSubtitle}>트윗 성향</div>

                        <div className={styles.SectionContent}>
                            <ul>
                                <li>혼잣말, 뻘트윗을 잘합니다. 별로 재미는 없어요...</li>
                                <li>가뭄에 콩나듯 마인크래프트 할 사람을 찾거나, 쿠키런 킹덤 이야기를 하거나, 코딩 이야기를 하긴 합니다. 절대 자주는 아니에요.</li>
                            </ul>
                        </div>

                        <div className={styles.SectionSubtitle}>관심분야</div>

                        <div className={styles.SectionContent}>
                            관심분야라고 해서 트위터에서 이에 대한 이야기를 자주 하지는 않습니다만, 탐라에 있는 트윗 중 관심 분야에 맞는 트윗에는 답멘을 달기도 하니 적어 놓겠습니다.
                            <ul style={{marginTop: "5px"}}>
                                <li>코딩. 웹 / 안드로이드 네이티브(Kotlin) / 유니티 / 마인크래프트 플러그인 등...</li>
                                <li>남캐!! 위치를 보시면 아시겠지만 낡고 지친, 통통하고 둥글둥글한 대학(원)생 남캐를 최고로 좋아합니다.</li>
                                <li>마인크래프트, 쿠키런 킹덤, 사커스피리츠, 노스텔지어, 모바일 리겜 등</li>
                            </ul>
                        </div>

                        <div className={styles.SectionSubtitle}>참고 사항</div>

                        <div className={styles.SectionContent}>
                            <ul style={{marginTop: "5px"}}>
                                <li>선팔해주시는건 상관 없습니다만 관심 분야가 많이 다르거나 지뢰가 보이면 맞팔은 하지 않을 수 있습니다.</li>
                                <li>지뢰는 알아서 피하므로 메인 트윗에 흔적을 남겨주시면 살펴보고 찾아가겠습니다.</li>
                            </ul>
                        </div>

                        <div className={styles.SectionSubtitle}>갤러리</div>

                        <div className={[styles.SectionContent].join(" ")}>
                            사진이 하나도 없으니까 뭔가 허전에서 대충 집어넣는 사진들.
                            
                            <div className={styles.ImageGroup}>
                                <img src={twitter_bg} alt={""}/>
                                <img src={twitter_mo} alt={""}/>
                                <img src={twitter_nostalgia} alt={""}/>
                                <img src={twitter_ck} alt={""}/>
                                <img src={twitter_mc} alt={""}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

    onSectionControllerItemSelected(event, type, color) {
        let localThis = this;
        this.setState({
            type: type,
            animating: true,
            indicator_width: event.target.offsetWidth,
            indicator_pos: event.target.offsetLeft,
            indicator_color: color
        });
        setTimeout(() => {
            localThis.setState({animating: false});
        }, 250);
    }
}

export default Section;