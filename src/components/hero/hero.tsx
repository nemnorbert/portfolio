import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './hero.scss?inline';

export default component$(() => {
    useStylesScoped$(style);

    return (
        <section>
            <div class="title">
                <h1>Németh Norbert</h1>
                <p>Web developer</p>
            </div>
        </section>
    );
});