import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './item.scss?inline';
import type { TranslatesCurrent } from "~/types/locales";

interface Props {
    name: any,
    data: any,
    tech: any,
    category: string
    translates: TranslatesCurrent,
    model: any
}

export default component$((props: Props) => {
  useStylesScoped$(style)
    const data = props.data;
    const tech = props.tech;
    const category = props.category;
    const translates = props.translates;

    const isShow = () => {
      if (category === "") {
        return "item";
      }
      return data.tech.includes(category) ? "item" : "item hide"
    }

    return (
      <div class={isShow()}>
          <div class="cover" title={data.title.en}>
            
            <div class="info">
              <div class="title">{ data.title.en }</div>
              <div class="tech">
                  {data.tech.map((item: string, key: number) => (
                      <div key={key} title={tech[item].name}>
                        <i class={`devicon-${tech[item].icon}`}></i>
                      </div>
                  ))}
              </div>
            </div>
          </div>
          <div class="action">
            <a href={data.url} target="_blank">
              <i class="bi bi-play-fill"></i> {translates.work.btns.demo}
            </a>
            <div><i class="bi bi-three-dots-vertical"></i> {translates.work.btns.details}</div>
          </div>
      </div>
    );
});