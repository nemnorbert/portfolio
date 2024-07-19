import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './contact.scss?inline';
import Form from "./form";

export default component$(() => {
    useStylesScoped$(style);

    return (
        <section>
            <div class="title">
                <h2>Contact Me</h2>
            </div>
            <Form />
        </section>
    );
});