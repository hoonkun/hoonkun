import React from "react";

import styles from './App.module.css';

import background from "./resources/images/main_background.png"
import Section from "./components/Section";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bg_style: [],
            isTop: true,
            appScrollTop: 0
        }

        this.updateBackgroundStyle = this.updateBackgroundStyle.bind(this);
        this.onAppScroll = this.onAppScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateBackgroundStyle);
        document.addEventListener("DOMContentLoaded", this.updateBackgroundStyle);
        
        document.querySelector("html").style.fontSize = Math.min(window.innerWidth / 41.1, 17) + "px"; 
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBackgroundStyle);
        document.removeEventListener("DOMContentLoaded", this.updateBackgroundStyle);
    }

    render() {
        let sat_date = new Date(2017, 10, 23).valueOf();
        let current_date = new Date().valueOf();

        let diff = current_date - sat_date;
        let diff_by_day = Math.floor(diff / 1000 / 60 / 60 / 24) + 1;

        return (
            <>
                <img className={this.state.bg_style.join(" ")}
                     alt="" src={background}/>

                <div className={styles.Foreground}/>

                <div style={{opacity: this.state.isTop ? 0.6 : 0}} className={styles.FirstPageTip}>
                    <div className={styles.FirstPageTipChild}>
                        아래로 내려서 더 많은 내용 확인
                    </div>
                </div>

                <div className={styles.App} onScroll={this.onAppScroll}>

                    <div className={styles.RightTop}>
                        <ul>
                            <li><a href="https://twitter.com/hoon_stream">twitter</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a href="https://github.com/gohoon-k">github</a></li>
                        </ul>
                    </div>

                    <div className={styles.TitleArea}>

                        <div className={styles.URL}>main.gohoon.io</div>
                        <div className={styles.Title}>우비를 대충 걸치고<br/>장대비 속으로</div>
                        <div className={styles.Subtitle}>본명이 아닌 '고훈'이라는 이름으로 활동하고 있습니다.</div>
                        <ul className={styles.Field}>
                            <li>Student</li>
                            <li>Developer</li>
                            <li>
                                <del>Rhythm Gamer</del>
                            </li>
                        </ul>
                        <div className={styles.School}>현재는 유사대학생이지만 <del>잘못을 저질러서</del> 곧 대학원생이 될 예정입니다.</div>
                        <div className={styles.Others}>대학수학능력시험 [2017.11.23]&nbsp;&nbsp;&nbsp;D+{diff_by_day}</div>

                        <div className={styles.BottomMargin}/>

                    </div>

                    <div style={{
                        marginTop: "-" + Math.min(this.state.appScrollTop / 2.5, 200) + "px"
                    }} className={[styles.SecondArea].join(" ")}>

                        <Section/>

                    </div>

                    <div className={styles.Footer}>

                        main.gohoon.io<br/>
                        Created at 2021-05-05, with React + gh-pages.<br/>
                        Background Photo by gohoon, at 2018.02.04 on 34.6630667,135.5022333
                    </div>

                </div>
            </>
        );
    }

    updateBackgroundStyle() {
        let windowRatio = window.innerWidth / window.innerHeight;
        const bgRatio = 1.463867;

        if (windowRatio > bgRatio) {
            this.setState({bg_style: [styles.Background, styles.Background_Landscape]});
        } else {
            this.setState({bg_style: [styles.Background, styles.Background_Portrait]});
        }
    }

    onAppScroll(event) {
        this.setState({isTop: event.target.scrollTop < 7, appScrollTop: event.target.scrollTop});
    }
}

export default App;
