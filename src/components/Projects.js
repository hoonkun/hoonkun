import React from "react";

import style_projects from "../stylesheets/Projects.module.css";

import img_code2lang from "../resources/images/projects/code2lang/preview.png";
import img_destroy_it from "../resources/images/projects/destroy-it/preview.png";
import img_clock from "../resources/images/projects/hoon-clock/preview.jpg";
import img_kuroneko from "../resources/images/projects/kuroneko/preview.jpg";
import img_static from "../resources/images/projects/static-field/preview.png";

class Projects extends React.Component {

    render() {
        return (
            <div>
                
                <div className={style_projects.projects_container}>
                    <Project project_name="Code2Lang"
                             project_hashtags={["#python", "#tensorflow", "#keras", "#ML"]}
                             project_id="::ML-01-Code2Lang"
                             project_img={img_code2lang}>
                        tensorflow 2.0 (+keras) 파이썬 코드조각이에요.<br/>
                        소스코드를 보고 어떤 언어인지 예측합니다.<br/>
                        이 페이지가 정적 페이지이기 때문에 직접 해볼 수는 없지만 아래의 링크를 통해 코드를 살펴볼 수는 있습니다.<br/>
                        자세히 보려면 -> <a href="https://github.com/gohoon-k/code2lang">이쪽</a>으로
                    </Project>
                    <Project project_img={img_destroy_it}
                             project_name="DestroyIt"
                             project_hashtags={["#kotlin", "#Spigot", "#Minecraft"]}
                             project_id="::Minecraft-01-DestroyIt">
                        마인크래프트 서버 플러그인입니다.<br/>
                        어떤 마인크래프트 유튜버가 했던 컨텐츠의 플러그인을 따라서 만들어봤습니다.<br/>
                        통계, 정답 보기 등 각종 편의기능도 추가되어있어요!<br/>
                        자세히 보려면 -> <a href="https://github.com/gohoon-k/destroy-it">이쪽</a>으로
                    </Project>
                    <Project project_img={img_clock}
                             project_name="Hoon Clock"
                             project_hashtags={["#UnityEngine", "#C-sharp"]}
                             project_id="::Unity-03-HoonClock">
                        윈도우 운영체제의 월페이퍼 엔진 전용 배경화면입니다.<br/>
                        간단하게 몇가지 문구와 시계를 출력하는 프로그램이고, 이것을 월페이퍼 엔진을 사용해 배경화면에 까는 방식입니다.<br/>
                        유니티 공부하면서 만든 프로젝트에요.<br/>
                        자세히 보거나 다운로드하려면 -> <a href="https://github.com/gohoon-k/time-ame-unity">이쪽</a>으로!!
                    </Project>
                    <Project project_img={img_kuroneko}
                             project_name="KuroNeko"
                             project_hashtags={["#kotlin", "#Android"]}
                             project_id="::Android-39-KuroNeko">
                        안드로이드 운영체제의 라이브 배경화면입니다.<br/>
                        검은 고양이가 화면에 나옵니다. 귀여워요!! 손가락을 따라 시선을 옮기거나 표정을 바꾸기도 합니다.<br/>
                        다운로드하려면 -> <a href="https://drive.google.com/file/d/1EtuKMRQPi7sPff4tcopK9RZdMgkQPbmy/view?usp=sharing">이쪽</a>으로!!<br/>
                        자세히 보려면 -> <a href="https://github.com/gohoon-k/kuro-neko">이쪽</a>으로!
                    </Project>
                    <Project project_name="Doodle-Android"
                             project_hashtags={["#kotlin", "#Android"]}
                             project_id="::Android-37-Doodle">
                        안드로이드에서 쓸 수 있는 낙서 라이브러리입니다.<br/>
                        아이디어가 떠오르면 추가하고 있는데,... 마지막으로 추가한게 몇 달은 된 것 같네요.
                        Manuscript, ShootingStar, TreeItemDecoration 등의 클래스가 포함되어있어요.<br/>
                        자세히 보려면 -> <a href="https://github.com/gohoon-k/doodle-android">이쪽</a>으로
                    </Project>
                    <Project project_name="Static Field"
                             project_hashtags={["#UnityEngine", "#C-sharp", "#RhythmGame"]}
                             project_id="::Unity-05-SField"
                             project_img={img_static}>
                        고등학교 졸업 후에 만들었던 간단한 리듬게임입니다.<br/>
                        유니티 엔진을 사용하여 개발했으며, 정말 짧지만 실제 서비스한 기간이 있기도 합니다.<br/>
                        지금은 2년 정도 뒤에 코드를 다듬고 몇몇 기능을 추가해서 다시 짠 프로젝트만 남아있습니다.<br/>
                        {/*자세히 보려면 -> <a href="https://github.com/gohoon-k/">이쪽</a>으로!!*/}
                    </Project>
                    
                </div>

            </div>
        );
    }

}

class Project extends React.Component {

    render(){
        let image_valid = this.props.project_img != null

        return (
            <div className={style_projects.project}>
                {
                    image_valid ?
                        <img className={style_projects.project_img} alt={this.props.project_name}
                             src={this.props.project_img}/> :
                        null
                }
                <div className={style_projects.project_title}>{this.props.project_name}</div>
                <div className={style_projects.project_desc}>
                    {this.props.children}
                </div>
                <div className={style_projects.project_hashtag}>{this.props.project_hashtags.join(" ")}</div>
                <div className={style_projects.project_code}>
                    {this.props.project_id}
                </div>
            </div>
        );
    }

}

export default Projects;