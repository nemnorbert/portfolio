import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import style from './header.scss?inline';
import DarkMode from '~/components/darkmode/dark';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div id='header'>
        <div class="logo">NN</div>

        <nav class="menu">
          <ul class="laptop">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Portfolio</Link></li>
              <li><Link href="#">Contact</Link></li>
          </ul>
          <div class="dark"><DarkMode /></div>
          <div class="mobile">
            <span></span><span></span><span></span>
          </div>
        </nav>
    </div>
  );
});