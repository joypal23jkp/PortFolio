import { shallowMount } from "@vue/test-utils";
const MessageComponent = {
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
};

describe("displays message", () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(MessageComponent, {
    propsData: {
      msg: "Hello world",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Hello world");
});
