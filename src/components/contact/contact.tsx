import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './contact.scss?inline';
import Form from "./form";

export default component$(() => {
    useStylesScoped$(style);

    return (<>
        <h2 class="title">Contact Me</h2>
        <section>
            <div class="social">
                social
            </div>
            <div class="form">
                <Form />
            </div>
            <div class="other">
                other
            </div>
        </section>
    </>);
});