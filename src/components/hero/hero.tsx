import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import style from './hero.scss?inline';
import type { TranslatesCurrent } from "~/types/locales";
import Waves from "~/components/waves/waves";
import Header from "~/components/header/header";
import { CTX_Theme } from '~/root';

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;
    const theme = useContext(CTX_Theme);

    return (
        <section>
            <Header />
            <div class="box">
                <div class="title">
                    <h1>{translates.home.name || ''}</h1>
                    <p>Web developer</p>
                    <div class="buttons">
                        <div><i class="bi bi-chat-fill"></i> {translates.nav.contact}</div>
                        <div><i class="bi bi-laptop"></i> {translates.nav.work}</div>
                    </div>
                </div>
            </div>

            <div class={theme.dark ? "planet moon" : "planet"}></div>

            <Waves />
        </section>
    );
});