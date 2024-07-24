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
                <div onClick$={() => emailSender()} class="link"><i class="bi bi-envelope-fill"></i> email</div>
                {
                    Object.entries(configJson.contacts).map(([key, value]) => (
                        <a key={key} href={value.href} target="_blank">
                            <i class={`bi bi-${value.icon}`}></i> {key}
                        </a>
                    ))
                }
            </div>
            <div class="form">
                <Form translates={translates} />
            </div>
            <a href={configJson.card} class="card" target="_blank">
                <div class="title"><i class="bi bi-person-badge-fill"></i> Digitális Névjegykártya</div>
                <div class="content">

                </div>
            </a>
        </section>
    </>);
});