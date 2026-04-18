import { shallowMount } from "@vue/test-utils";
import CartSlider from "@/components/business/CartSlider/CartSlider.vue";
import { createStore } from "../../../../helpers/createStore";

const mountCartSlider = (propsData = {}, stateOverrides = {}) =>
  shallowMount(CartSlider, {
    store: createStore({ state: stateOverrides }),
    propsData: { isOpen: false, ...propsData },
    stubs: { CartItem: true, CartOrder: true, CartPayment: true },
  });

describe("CartSlider.vue", () => {
  it("renders the panel", () => {
    const wrapper = mountCartSlider();
    expect(wrapper.find(".cart__panel").exists()).toBe(true);
  });

  it("does not add open class when isOpen is false", () => {
    const wrapper = mountCartSlider({ isOpen: false });
    expect(wrapper.find(".cart__panel").classes()).not.toContain(
      "cart__panel--open"
    );
  });

  it("adds open class when isOpen is true", () => {
    const wrapper = mountCartSlider({ isOpen: true });
    expect(wrapper.find(".cart__panel").classes()).toContain(
      "cart__panel--open"
    );
  });

  it("renders overlay when isOpen is true", () => {
    const wrapper = mountCartSlider({ isOpen: true });
    expect(wrapper.find(".cart__overlay").exists()).toBe(true);
  });

  it("does not render overlay when isOpen is false", () => {
    const wrapper = mountCartSlider({ isOpen: false });
    expect(wrapper.find(".cart__overlay").exists()).toBe(false);
  });

  it("emits closeCart when close icon is clicked", async () => {
    const wrapper = mountCartSlider({ isOpen: true });
    await wrapper.find(".cart__close").trigger("click");
    expect(wrapper.emitted("closeCart")).toBeTruthy();
  });

  it("emits closeCart when overlay is clicked", async () => {
    const wrapper = mountCartSlider({ isOpen: true });
    await wrapper.find(".cart__overlay").trigger("click");
    expect(wrapper.emitted("closeCart")).toBeTruthy();
  });

  it("renders a CartItem for each sideCartItem", () => {
    const wrapper = mountCartSlider(
      {},
      {
        sideCartItems: [
          {
            id: 1,
            title: "Product 1",
            price: 100,
            quantity: 1,
            thumbnail: "img.png",
          },
          {
            id: 2,
            title: "Product 2",
            price: 200,
            quantity: 2,
            thumbnail: "img.png",
          },
        ],
      }
    );
    expect(wrapper.findAllComponents({ name: "CartItem" }).length).toBe(2);
  });

  it("renders CartOrder component", () => {
    const wrapper = mountCartSlider();
    expect(wrapper.findComponent({ name: "CartOrder" }).exists()).toBe(true);
  });

  it("renders CartPayment component", () => {
    const wrapper = mountCartSlider();
    expect(wrapper.findComponent({ name: "CartPayment" }).exists()).toBe(true);
  });

  it("sets selectedItem to null when panel is clicked", async () => {
    const wrapper = mountCartSlider();
    wrapper.vm.selectedItem = 1;
    await wrapper.find(".cart__panel").trigger("click");
    expect(wrapper.vm.selectedItem).toBeNull();
  });
});
