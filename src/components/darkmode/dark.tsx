import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import styles from "./dark.scss?inline";
import { CTX_Theme } from '~/root';

const storageName = 'darkmode';

const checkIt = () => {
  const storage = localStorage.getItem(storageName);
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storage !== null) { return JSON.parse(storage) === true; }
  if (prefers) { return true; }
  return false;
}

const darkmode = (switchTo = false, status: any) => {
  let isDark;

  if (!switchTo) {
      isDark = checkIt();
  } else {
      const theme = document.documentElement.className;
      isDark = theme !== "dark";
  }

  if (isDark) {
      document.documentElement.className = "dark";
      if (switchTo) {
          localStorage.setItem(storageName, JSON.stringify(true));
      }
  } else {
      document.documentElement.className = "light";
      if (switchTo) {
          localStorage.setItem(storageName, JSON.stringify(false));
      }
  }

  status.dark = isDark;
}
 
// Component
export default component$(() => {
  useStylesScoped$(styles);
  const theme = useContext(CTX_Theme);
  console.log("switcher: ", theme)

  return (
    <label title={theme.dark ? "On" : "Off"} class="switch">
      <input
        type="checkbox"
        id="hide-checkbox"
        onClick$={() => darkmode(true, theme)}
      />
      <span class="slider round"></span>
    </label>
  );
});