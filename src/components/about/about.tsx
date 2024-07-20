import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './about.scss?inline';
import ProfilePicture from '~/media/about/me.jpg?jsx';

export default component$(() => {
    useStylesScoped$(style);

    return (<>
        <h2 class="title">Rólam</h2>
        <section>
            <div class="picture">
                <ProfilePicture alt="Picture of me" />
            </div>
            <div class="about">
                <h3 class="title">Bemutatkozás</h3>
                <p>Üdvözöllek a weboldalamon! Én [Név] vagyok, egy szenvedélyes frontend fejlesztő, aki elkötelezett amellett, hogy modern és felhasználóbarát weboldalakat és alkalmazásokat hozzon létre.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat quam id turpis bibendum, in egestas metus scelerisque. Curabitur venenatis, arcu eu dictum cursus, libero justo euismod nulla, vel posuere purus dolor non metus. Phasellus ac nunc vitae urna dapibus malesuada.
                Az elmúlt [X év] során széleskörű tapasztalatot szereztem különféle technológiák és eszközök használatában, beleértve a HTML, CSS, JavaScript, React és Angular keretrendszereket. Célom mindig az, hogy olyan digitális élményeket hozzak létre, amelyek nemcsak jól néznek ki, hanem könnyen használhatóak és hatékonyak is.</p>
            </div>
            <div class="cv">
                Önéletrajz letöltése (PDF)
            </div>
            <div class="flag">
                <span></span><span></span><span></span>
            </div>
            <div class="skills">
                <div>skill 1</div>
                <div>skill 2</div>
            </div>
        </section>
    </>);
});