import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './footer.scss?inline';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <footer>
      <div class="title">NN</div>
    </footer>
  );
});