import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './index.scss?inline';

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
        <h2>Munka</h2>
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