import { defineComponent } from "vue";

const Bar = defineComponent<{ foo: string }>({
  setup(props) {
    return () => <h1>{props.foo}</h1>
  }
})

export const App = defineComponent<{ foo: string }>({
  setup(props) {
    return () => <Bar foo={props.foo} />
  }
})