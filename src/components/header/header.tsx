import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import style from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div id='header'>
        <div>NN</div>

        <nav>
            <ul>
                <li><Link href="/">Főoldal</Link></li>
                <li><Link href="/work">Munka</Link></li>
                <li><Link href="/about">Rólam</Link></li>
                <li><Link href="/contact">Kapcsolat</Link></li>
            </ul>
        </nav>
    </div>
  );
});