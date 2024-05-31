import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './work.scss?inline';
import Item from "~/components/work/item";
import portfolioJSON from "~/config/portfolio.json";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <section>
      <h1>Összes Project</h1>
      <div class="filter">
        {Object.entries(portfolioJSON.tech).map(([key, value]) => (
            <button key={key}>{value}</button>
        ))}
      </div>
      <div class="content">
        {Object.entries(portfolioJSON.portfolio).map(([key, value]) => (
            <Item key={key} name={key} tech={portfolioJSON.tech} data={value}/>
        ))}
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