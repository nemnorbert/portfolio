import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './index.scss?inline';
import portfolioJSON from "~/config/portfolio.json";
import Item from "~/components/work/item";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <>
      <section id="home">
        <div class="title">
          <h1>Németh Norbert</h1>
          <p>Web developer</p>
        </div>
      </section>

      <section id="work">
        <h2>Portfólió (Kiemelt)</h2>
        <div class="content">
          {Object.entries(portfolioJSON.portfolio).map(([key, value]) => (
              <Item key={key} name={key} tech={portfolioJSON.tech} data={value}/>
          ))}
        </div>
        <Link href="/work">Összes Megtekintése</Link>
      </section>

      <section id="about">
        <h2>Rólam</h2>
      </section>

      <section id="contact">
        <h2>Kapcsolat</h2>
      </section>
    </>
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