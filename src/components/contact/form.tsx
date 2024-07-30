import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './form.scss?inline';

export default component$(() => {
    useStylesScoped$(style);

    return (
        <form>
            <input id="name" type="text" required />
            <input id="email" type="email" required />
            <textarea id="message" rows={4} required />
            <input type="submit" value="Submit" />
        </form>
    );
});