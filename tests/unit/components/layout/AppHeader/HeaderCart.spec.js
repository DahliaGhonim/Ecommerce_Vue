import { shallowMount } from "@vue/test-utils";
import HeaderCart from "@/components/layout/AppHeader/HeaderCart.vue";
import { createStore } from "../../../../helpers/createStore";

const mountHeaderCart = (sideCartCount = 0) =>
  shallowMount(HeaderCart, {
    store: createStore({
      getters: { sideCartCount: () => sideCartCount },
    }),
  });

describe("HeaderCart.vue", () => {
  it("renders the cart wrapper", () => {
    const wrapper = mountHeaderCart();
    expect(wrapper.find(".header-cart").exists()).toBe(true);
  });

  it("renders the cart icon", () => {
    const wrapper = mountHeaderCart();
    expect(wrapper.find(".header-cart__icon").exists()).toBe(true);
  });

  it("does not show badge when cart is empty", () => {
    const wrapper = mountHeaderCart(0);
    expect(wrapper.find(".header-cart__badge").exists()).toBe(false);
  });

  it("shows badge when cart has items", () => {
    const wrapper = mountHeaderCart(3);
    expect(wrapper.find(".header-cart__badge").exists()).toBe(true);
  });

  it("displays correct count in badge", () => {
    const wrapper = mountHeaderCart(5);
    expect(wrapper.find(".header-cart__badge").text()).toBe("5");
  });

  it("emits openCart when clicked", async () => {
    const wrapper = mountHeaderCart();
    await wrapper.find(".header-cart").trigger("click");
    expect(wrapper.emitted("openCart")).toBeTruthy();
  });

  it("cart icon has correct alt text", () => {
    const wrapper = mountHeaderCart();
    expect(wrapper.find("img").attributes("alt")).toBe("cart");
  });
});
