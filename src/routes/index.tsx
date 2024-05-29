import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="home">
        <h1>Németh Norbert</h1>
        <h2>Web developer</h2>
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
