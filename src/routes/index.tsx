import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './index.scss?inline';

// Components
import Hero from "~/components/hero/hero";
import Work from "~/components/work/work";
import About from "~/components/about/about";
import Contact from "~/components/contact/contact";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
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