import { shallowMount } from "@vue/test-utils";
import AppHeading from "@/components/UI/AppHeading.vue";

describe("AppHeading.vue", () => {
  it("renders the heading wrapper", () => {
    const wrapper = shallowMount(AppHeading);
    expect(wrapper.find(".heading").exists()).toBe(true);
  });

  it("renders the icon element", () => {
    const wrapper = shallowMount(AppHeading);
    expect(wrapper.find(".heading__icon").exists()).toBe(true);
  });

  it("renders slot content inside heading__text", () => {
    const wrapper = shallowMount(AppHeading, {
      slots: { default: "Today's" },
    });
    expect(wrapper.find(".heading__text").text()).toBe("Today's");
  });

  it("renders empty text when no slot provided", () => {
    const wrapper = shallowMount(AppHeading);
    expect(wrapper.find(".heading__text").text()).toBe("");
  });
});
