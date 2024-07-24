import { component$, createContextId, useContextProvider, useStore, useTask$, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.scss";
import type { Translates } from "~/types/locales";
import loadLocales from "~/utils/loadLocales";

export const CTX_Translate = createContextId<Translates>('CTX_Translate');

type Props = {
  lang?: string;
}

export default component$((props: Props) => {
  const lang = props.lang || 'en';
  const translate: any = useStore({ current: {} });

  const loadData = $(async () => {
    const data = await loadLocales(lang);
    translate.current = data;
  });

  useTask$(async () => {
    await loadData();
  });

  useContextProvider(CTX_Translate, translate);
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   * Don't remove the `<head>` and `<body>` elements.
  */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
