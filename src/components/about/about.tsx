import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './about.scss?inline';
import ProfilePicture from '~/media/about/me.jpg?jsx';
import type { TranslatesCurrent } from "~/types/locales";

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
                <h3 class="title">{translates.about.title}</h3>
                <p>Üdvözöllek a weboldalamon! Én [Név] vagyok, egy szenvedélyes frontend fejlesztő, aki elkötelezett amellett, hogy modern és felhasználóbarát weboldalakat és alkalmazásokat hozzon létre.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat quam id turpis bibendum, in egestas metus scelerisque. Curabitur venenatis, arcu eu dictum cursus, libero justo euismod nulla, vel posuere purus dolor non metus. Phasellus ac nunc vitae urna dapibus malesuada.
                Az elmúlt [X év] során széleskörű tapasztalatot szereztem különféle technológiák és eszközök használatában, beleértve a HTML, CSS, JavaScript, React és Angular keretrendszereket. Célom mindig az, hogy olyan digitális élményeket hozzak létre, amelyek nemcsak jól néznek ki, hanem könnyen használhatóak és hatékonyak is.</p>
            </div>
            <a href="#" target="_blank" class="cv">
                <div>{translates.cv}</div>
                <div>
                    <i class="bi bi-arrow-down-circle"></i> PDF
                </div>
            </a>
            <div class="flag">
                <span></span><span></span><span></span>
            </div>
            <div class="skill">
                <b>Képességeim</b>
            </div>
            <div class="learn">
                <b>Mit tanulok jelenleg?</b>
                <div class="content">
                    <div><i class="devicon-qwik-plain"></i> Qwik</div>
                    <div><i class="bi bi-cloud-check-fill"></i> Amazon Cloud</div>
                </div>
            </div>
        </section>
    </>);
});