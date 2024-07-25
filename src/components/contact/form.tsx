import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './form.scss?inline';

import type { TranslatesCurrent } from "~/types/locales";

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;

    return (<>
        <h3>{translates.contact.send}</h3>
        <form>
            <input id="name" type="text" required />
            <input id="email" type="email" required />
            <textarea id="message" rows={4} required />
            <input type="submit" value="Submit" />
        </form>
    </>);
});