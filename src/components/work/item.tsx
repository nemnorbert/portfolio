import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './item.scss?inline';

interface Items {
    title: string,
    image: string,
}

export default component$((props: Items) => {
  useStylesScoped$(style)
    const title = props.title;
    const image = props.image;

  return (
    <div class="item">
        <div class="cover">
            <img src={image} alt="" />
        </div>
        <div class="text">
            <b>{ title }</b>
            <div class="category">
                #mui #ji
            </div>
        </div>
    </div>
  );
});