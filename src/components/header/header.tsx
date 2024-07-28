import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import style from './header.scss?inline';
import DarkMode from '~/components/darkmode/dark';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div id='header'>
        <div>NN</div>

        <nav>
          <div class="dark"><DarkMode /></div>
            <ul>
                <li><Link href="#">Menu</Link></li>
            </ul>
        </nav>
    </div>
  );
});