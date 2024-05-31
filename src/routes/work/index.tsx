import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './work.scss?inline';
import Item from "~/components/work/item";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <section>
      <h1>Összes Project</h1>
      <div class="filter">
        #css #js #react
      </div>
      <div class="content">
        <Item title="Project A" image="01"/>
        <Item title="Project B" image="01"/>
        <Item title="Project C" image="01"/>
      </div>
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