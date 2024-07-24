import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './hero.scss?inline';
import type { TranslatesCurrent } from "~/types/locales";

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;

    return (
        <section>
            <div class="title">
                <h1>{translates.home.name || ''}</h1>
                <p>Web developer</p>
                <div class="buttons">
                    <div><i class="bi bi-chat-fill"></i> {translates.nav.contact}</div>
                    <div><i class="bi bi-laptop"></i> {translates.nav.work}</div>
                </div>
            </div>
        </section>
    );
});