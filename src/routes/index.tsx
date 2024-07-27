import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import style from './index.scss?inline';
import { CTX_Translate } from '~/root';

// Components
import Hero from "~/components/hero/hero";
import Work from "~/components/work/work";
import About from "~/components/about/about";
import Contact from "~/components/contact/contact";

export default component$(() => {
  useStylesScoped$(style);
  const translates = useContext(CTX_Translate);

  return (
    <>
      <Hero translates={translates.current} />
      <main>
        <About translates={translates.current} />
        <Work translates={translates.current} />
        <Contact translates={translates.current} />
      </main>
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