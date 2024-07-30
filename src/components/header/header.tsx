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
          <div class="dark"><DarkMode /></div>
            <ul>
                <li><Link href="#">Menu</Link></li>
            </ul>
        </nav>
    </div>
  );
});