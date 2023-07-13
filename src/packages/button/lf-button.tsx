import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "lf-button",
  setup() {
    return () => (
      <div>
        <button>
          <slot>ff</slot>
        </button>
      </div>
    );
  },
});
