import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './footer.scss?inline';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <footer>
      <div class="title">Németh Norbert</div>
      <div class="menu">social | menu | meni1</div>
      <div class="social">1 2 3 4</div>
      <div class="poweredby">ADANOR</div>
    </footer>
  );
});