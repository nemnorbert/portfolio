import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './item.scss?inline';

interface Items {
    name: any,
    data: any,
    tech: any,
    category: string
}

export default component$((props: Items) => {
  useStylesScoped$(style)
    const name = props.name;
    const data = props.data;
    const tech = props.tech;
    const category = props.category;

    const isShow = () => {
      if (category === "") {
        return "item";
      }
      return data.tech.includes(category) ? "item" : "item hide"
    }

    return (
      <div class={isShow()} title={data.title.en}>
          <div class="title">
            { data.title.en }
          </div>
          <div class="cover">
            <img src={`/work/cover/${name}.webp`} alt="" />
          </div>
          <div class="tech">
              {data.tech.map((item: string, key: number) => (
                  <div key={key} title={tech[item].name}>
                    <i class={`devicon-${tech[item].icon}`}></i>
                  </div>
              ))}
          </div>
      </div>
    );
});