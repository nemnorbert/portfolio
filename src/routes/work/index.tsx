import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './work.scss?inline';
import Item from "~/components/work/item";
import portfolioJSON from "~/config/portfolio.json";

export default component$(() => {
  useStylesScoped$(style);
  const category = useStore({
    current: "",
  })

  const clickFilterButton = $((key: string) => {
    const isSet = category.current.includes(key);
    category.current = isSet ? "" : key;
  })

  return (
    <section>
      <h1>Összes Project</h1>
      <div class="filter">
        <button class={category.current.length === 0 ? "active" : undefined}
          onClick$={() => category.current = ""}
        >
          Összes
        </button>
        {Object.entries(portfolioJSON.tech).map(([key, value]) => (
            <button key={key} title={value.name} 
              class={category.current.includes(key) ? "active" : undefined}
              onClick$={() => clickFilterButton(key)}
            >
              <i class={`devicon-${value.icon}`}></i> {value.name}
            </button>
        ))}
      </div>
      <div class="content">
        {Object.entries(portfolioJSON.portfolio).map(([key, value]) => (
            <Item key={key} name={key} tech={portfolioJSON.tech} data={value} category={category.current}/>
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