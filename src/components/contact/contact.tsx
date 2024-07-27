import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './contact.scss?inline';
import Form from "./form";
import emailSender from "~/utils/emailSender";
import configJson from "~/config/contact.json";
import type { TranslatesCurrent } from "~/types/locales";
import Waves from "~/components/waves/waves";

interface Props {
    translates: TranslatesCurrent
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const translates = props.translates;

    return (<>
        <section>
            <h2 class="title">{translates.nav.contact}</h2>
            <div class="box">
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

                <a class="card" href={configJson.card} target="_blank">
                    <div class="title">
                        <i class="bi bi-person-badge-fill"></i> {translates.contact.card}
                    </div>
                    <div class="content">
                        <img src="/card_qr.webp" width={250} height={250} alt="digital business card" />
                    </div>
                </a>
            </div>

            <Waves rgb="18,27,52" />
        </section>
    </>);
});