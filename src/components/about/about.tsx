import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './about.scss?inline';
import ProfilePicture from '~/media/about/me.jpg?jsx';
import type { TranslatesCurrent } from "~/types/locales";
import portfolioJson from "~/config/portfolio.json";
const portfolio: any = portfolioJson;

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;

    return (<>
        <h2 class="title">{ translates.nav.about }</h2>
        <section>
            <div class="picture">
                <ProfilePicture alt="Picture of me" />
            </div>
            <div class="about">
                <h3>{translates.about.title}</h3>
                <p>Üdvözöllek a weboldalamon! Én [Név] vagyok, egy szenvedélyes frontend fejlesztő, aki elkötelezett amellett, hogy modern és felhasználóbarát weboldalakat és alkalmazásokat hozzon létre.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat quam id turpis bibendum, in egestas metus scelerisque. Curabitur venenatis, arcu eu dictum cursus, libero justo euismod nulla, vel posuere purus dolor non metus. Phasellus ac nunc vitae urna dapibus malesuada.
                Az elmúlt [X év] során széleskörű tapasztalatot szereztem különféle technológiák és eszközök használatában, beleértve a HTML, CSS, JavaScript, React és Angular keretrendszereket. Célom mindig az, hogy olyan digitális élményeket hozzak létre, amelyek nemcsak jól néznek ki, hanem könnyen használhatóak és hatékonyak is.</p>
            </div>
            <a href="#" target="_blank" class="cv">
                <div>
                    <i class="bi bi-arrow-down-circle"></i>
                    <div>{translates.cv}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>
            </a>
            <div class="flag">
                <span></span><span></span><span></span>
            </div>
            <div class="skill">
                <h3>{translates.about.skill}</h3>
                <div class="row">
                    {
                        portfolio.skills.map((item: string, key: number) => (
                            <div 
                                key={key} 
                                title={portfolio?.tech?.[item]?.name || undefined} 
                                class="item"
                            >
                                <i class={`devicon-${portfolio?.tech?.[item]?.icon}`}></i>
                                <div>{portfolio?.tech?.[item]?.name || '-'}</div>
                            </div>
                        ))
                    }
                    {
                        portfolio.skills.map((item: string, key: number) => (
                            <div 
                                key={'row2'+key} 
                                title={portfolio?.tech?.[item]?.name || undefined} 
                                class="item"
                            >
                                <i class={`devicon-${portfolio?.tech?.[item]?.icon}`}></i>
                                <div>{portfolio?.tech?.[item]?.name || '-'}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div class="learn">
                <h3>{translates.about.learn}</h3>
                <div class="content">
                    {
                        portfolioJson.learn.map((item: string, key: number) => (
                            <div 
                                key={key} 
                                title={portfolio?.tech?.[item]?.name || undefined} 
                                class="item"
                            >
                                <i class={`devicon-${portfolio?.tech?.[item]?.icon}`}></i>
                                <div>{portfolio?.tech?.[item]?.name || '-'}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>);
});