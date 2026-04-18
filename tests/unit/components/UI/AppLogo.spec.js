import { shallowMount } from "@vue/test-utils";
import AppLogo from "@/components/UI/AppLogo.vue";

describe("AppLogo.vue", () => {
  it("renders the logo wrapper", () => {
    const wrapper = shallowMount(AppLogo);
    expect(wrapper.find(".logo").exists()).toBe(true);
  });

  it("renders the brand name 'Exclusive'", () => {
    const wrapper = shallowMount(AppLogo);
    expect(wrapper.text()).toBe("Exclusive");
  });
});
