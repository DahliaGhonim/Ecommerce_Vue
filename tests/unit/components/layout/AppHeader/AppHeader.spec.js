import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/layout/AppHeader/AppHeader.vue";
import { createStore } from "../../../../helpers/createStore";
import { createRouter } from "../../../../helpers/createRouter";

const mountAppHeader = () =>
  shallowMount(AppHeader, {
    store: createStore(),
    router: createRouter(),
    stubs: {
      AppLogo: true,
      HeaderNav: true,
      HeaderSearch: true,
      HeaderCart: true,
      CartSlider: true,
      RouterLink: true,
    },
  });

describe("AppHeader.vue", () => {
  it("renders the header element", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.find(".header").exists()).toBe(true);
  });

  it("renders AppLogo", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.findComponent({ name: "AppLogo" }).exists()).toBe(true);
  });

  it("renders HeaderNav", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.findComponent({ name: "HeaderNav" }).exists()).toBe(true);
  });

  it("renders HeaderSearch", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.findComponent({ name: "HeaderSearch" }).exists()).toBe(true);
  });

  it("renders HeaderCart", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.findComponent({ name: "HeaderCart" }).exists()).toBe(true);
  });

  it("renders CartSlider", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.findComponent({ name: "CartSlider" }).exists()).toBe(true);
  });

  it("has isCartOpen as false by default", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.vm.isCartOpen).toBe(false);
  });

  it("passes isCartOpen to CartSlider", () => {
    const wrapper = mountAppHeader();
    const cartSlider = wrapper.findComponent({ name: "CartSlider" });
    expect(cartSlider.props("isOpen")).toBe(false);
  });

  it("sets isCartOpen to true when HeaderCart emits openCart", async () => {
    const wrapper = mountAppHeader();
    wrapper.findComponent({ name: "HeaderCart" }).vm.$emit("openCart");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isCartOpen).toBe(true);
  });

  it("sets isCartOpen to false when CartSlider emits closeCart", async () => {
    const wrapper = mountAppHeader();
    wrapper.vm.isCartOpen = true;
    wrapper.findComponent({ name: "CartSlider" }).vm.$emit("closeCart");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isCartOpen).toBe(false);
  });

  it("renders the spacer element", () => {
    const wrapper = mountAppHeader();
    expect(wrapper.find(".header__spacer").exists()).toBe(true);
  });
});
