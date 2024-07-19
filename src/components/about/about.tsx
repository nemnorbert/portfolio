import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './about.scss?inline';

export default component$(() => {
    useStylesScoped$(style);

    return (
        <section>
            <div class="title">
                <h2>About Me</h2>
            </div>
            
        </section>
    );
});