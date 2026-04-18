import { shallowMount } from "@vue/test-utils";
import CartOrder from "@/components/business/CartSlider/CartOrder.vue";
import { createStore } from "../../../../helpers/createStore";

const mountCartOrder = (totalUSD = 0) =>
  shallowMount(CartOrder, {
    store: createStore({
      getters: { totalUSD: () => totalUSD },
    }),
  });

describe("CartOrder.vue", () => {
  it("renders the cart order section", () => {
    const wrapper = mountCartOrder();
    expect(wrapper.find(".cart-order").exists()).toBe(true);
  });

  it("displays subtotal correctly", () => {
    const wrapper = mountCartOrder(150);
    expect(wrapper.text()).toContain("$150.00");
  });

  it("displays total correctly", () => {
    const wrapper = mountCartOrder(150);
    const totals = wrapper.findAll("p");
    const totalTexts = totals.wrappers.map((w) => w.text());
    expect(totalTexts.filter((t) => t === "$150.00").length).toBe(2);
  });

  it("displays Free for shipping", () => {
    const wrapper = mountCartOrder();
    expect(wrapper.text()).toContain("Free");
  });

  it("displays $0.00 when cart is empty", () => {
    const wrapper = mountCartOrder(0);
    expect(wrapper.text()).toContain("$0.00");
  });
});
