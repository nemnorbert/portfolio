import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import style from './work.scss?inline';
import Item from "~/components/work/item";
import portfolioJSON from "~/config/portfolio.json";

interface Props {
    teszt?: string;
}

export default component$((props: Props) => {
    useStylesScoped$(style);
    const teszt = props.teszt;
    console.log(teszt)

    const category = useStore({
        current: "",
    })

    const clickFilterButton = $((key: string) => {
        const isSet = category.current.includes(key);
        category.current = isSet ? "" : key;
    })

    return (
        <section>
            <div class="title">
                <h2>Work</h2>
            </div>
            <div class="filter">
                <button 
                    class={category.current.length === 0 ? "active" : undefined}
                    onClick$={() => category.current = ""}
                >
                All
                </button>
                {Object.entries(portfolioJSON.tech).map(([key, value]) => (
                    <button 
                        key={key} 
                        title={value.name} 
                        class={category.current.includes(key) ? "active" : undefined}
                        onClick$={() => clickFilterButton(key)}
                    >
                    <i class={`devicon-${value.icon}`}></i> {value.name}
                    </button>
                ))}
            </div>
            <div class="content">
                {Object.entries(portfolioJSON.portfolio).map(([key, value]) => (
                    value.active && 
                    <Item 
                        key={key} 
                        name={key} 
                        tech={portfolioJSON.tech} 
                        data={value} 
                        category={category.current}
                    />
                ))}
            </div>
        </section>
    );
});