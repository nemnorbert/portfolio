import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './sidenav.scss?inline';

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div id='sidenav'>
        <div>Image</div>

        <nav>
            <ul>
                <li>Főoldal</li>
                <li>Munka</li>
                <li>Rólam</li>
                <li>Kapcsolat</li>
            </ul>
        </nav>
    </div>
  );
});