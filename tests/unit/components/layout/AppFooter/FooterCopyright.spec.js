import { shallowMount } from "@vue/test-utils";
import FooterCopyright from "@/components/layout/AppFooter/FooterCopyright.vue";

describe("FooterCopyright.vue", () => {
  it("renders the copyright wrapper", () => {
    const wrapper = shallowMount(FooterCopyright);
    expect(wrapper.find(".footer-copyright").exists()).toBe(true);
  });

  it("renders the content wrapper", () => {
    const wrapper = shallowMount(FooterCopyright);
    expect(wrapper.find(".footer-copyright__content").exists()).toBe(true);
  });

  it("renders the copyright icon", () => {
    const wrapper = shallowMount(FooterCopyright);
    expect(wrapper.find(".footer-copyright__icon").exists()).toBe(true);
  });

  it("renders the copyright text", () => {
    const wrapper = shallowMount(FooterCopyright);
    expect(wrapper.text()).toContain(
      "Copyright Rimel 2022. All right reserved"
    );
  });
});
