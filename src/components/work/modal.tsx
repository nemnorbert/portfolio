import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './modal.scss?inline';
import type { TranslatesCurrent } from "~/types/locales";

interface Props {
    translates: TranslatesCurrent,
    modal: any
}

export default component$((props: Props) => {
  useStylesScoped$(style)
    const translates = props.translates;
    const modal = props.modal.current;
    const isOpen = modal.open;

    //console.log("modal is: ", modal)

    return (
      <div class={isOpen ? 'modal open' : 'modal'}>
        <div class="box">
            <div class="content">
                tartalom
            </div>
        </div>
        <div class="bg"></div>
      </div>
    );
});