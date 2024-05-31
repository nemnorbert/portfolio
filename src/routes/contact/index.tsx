import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './contact.scss?inline';

export default component$(() => {
  useStylesScoped$(style);

  return (
    <section>
        <h1>Kapcsolat</h1>
    </section>
  );
});

export const head: DocumentHead = {
  title: "NN Portfolio",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};