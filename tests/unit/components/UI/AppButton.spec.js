import { shallowMount } from "@vue/test-utils";
import AppButton from "@/components/UI/AppButton.vue";

describe("AppButton.vue", () => {
  it("renders a button element", () => {
    const wrapper = shallowMount(AppButton);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("has default type of 'button'", () => {
    const wrapper = shallowMount(AppButton);
    expect(wrapper.find("button").attributes("type")).toBe("button");
  });

  it("renders the correct type when prop is passed", () => {
    const wrapper = shallowMount(AppButton, {
      propsData: { type: "submit" },
    });
    expect(wrapper.find("button").attributes("type")).toBe("submit");
  });

  it("renders slot content", () => {
    const wrapper = shallowMount(AppButton, {
      slots: { default: "Click Me" },
    });
    expect(wrapper.text()).toBe("Click Me");
  });

  it("has the btn class", () => {
    const wrapper = shallowMount(AppButton);
    expect(wrapper.find("button").classes()).toContain("btn");
  });
});
