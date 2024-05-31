import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './item.scss?inline';

interface Items {
    name: any,
    data: any,
    tech: any,
}

export default component$((props: Items) => {
  useStylesScoped$(style)
    const name = props.name;
    const data = props.data;
    const tech = props.tech;

  return (
    <div class="item">
        <div class="cover">
          <img src={`/work/cover/${name}.webp`} alt="" />
        </div>
        <div class="text">
            <b>{ data.title.en }</b>
            <div class="tech">
                {data.tech.map((item: string, key: number) => (
                    <button key={key}>{tech[item]}</button>
                ))}
            </div>
        </div>
    </div>
  );
});