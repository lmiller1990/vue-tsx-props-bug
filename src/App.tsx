import { defineComponent } from "vue";

const Bar = defineComponent<{ foo: string }>({
  setup(props) {
    return () => <h1>{props.foo}</h1>
  }
})

export const App = defineComponent({
  setup() {
    return () => <Bar foo='foo' />
  }
})