import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './contact.scss?inline';
import Form from "./form";
import emailSender from "~/utils/emailSender";
import configJson from "~/config/contact.json";
import type { TranslatesCurrent } from "~/types/locales";

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;

    return (<>
        <h2 class="title">{translates.nav.contact}</h2>
        <section>
            <div class="social">
                <h3>Elérhetőségek</h3>
                <div class="buttons">
                    <button onClick$={() => emailSender()} class="link"><i class="bi bi-envelope-fill"></i> Email</button>
                    {
                        Object.keys(configJson.contacts).map(([key, value]) => (
                            <a key={key} href={value.href}>
                                <i class={`bi bi-${value.icon}`}></i> {value.icon}
                            </a>
                        ))
                    }
                </div>
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