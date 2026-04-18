import { shallowMount } from "@vue/test-utils";
import CartItem from "@/components/business/CartSlider/CartItem.vue";
import { createStore } from "../../../../helpers/createStore";

const itemMock = {
  id: 1,
  title: "H1 Gamepad",
  price: 100,
  quantity: 2,
  thumbnail: "test-file-stub",
};

const mountCartItem = (propsData = {}) =>
  shallowMount(CartItem, {
    store: createStore(),
    propsData: { item: itemMock, selectedItem: null, ...propsData },
    stubs: { QuantityInput: true },
  });

describe("CartItem.vue", () => {
  it("renders the cart item", () => {
    const wrapper = mountCartItem();
    expect(wrapper.find(".cart-item").exists()).toBe(true);
  });

  it("renders the product title", () => {
    const wrapper = mountCartItem();
    expect(wrapper.text()).toContain(itemMock.title);
  });

  it("renders the correct price", () => {
    const wrapper = mountCartItem();
    const expectedPrice = (itemMock.price * itemMock.quantity).toFixed(2);
    expect(wrapper.text()).toContain(`$${expectedPrice}`);
  });

  it("renders the product thumbnail", () => {
    const wrapper = mountCartItem();
    expect(wrapper.find(".cart-item__img").attributes("src")).toBe(
      itemMock.thumbnail
    );
  });

  it("does not add selected class when not selected", () => {
    const wrapper = mountCartItem({ selectedItem: null });
    expect(wrapper.find(".cart-item").classes()).not.toContain(
      "cart-item--selected"
    );
  });

  it("adds selected class when item is selected", () => {
    const wrapper = mountCartItem({ selectedItem: itemMock.id });
    expect(wrapper.find(".cart-item").classes()).toContain(
      "cart-item--selected"
    );
  });

  it("shows remove button when item is selected", () => {
    const wrapper = mountCartItem({ selectedItem: itemMock.id });
    expect(wrapper.find(".cart-item__remove-btn").exists()).toBe(true);
  });

  it("hides remove button when item is not selected", () => {
    const wrapper = mountCartItem({ selectedItem: null });
    expect(wrapper.find(".cart-item__remove-btn").exists()).toBe(false);
  });

  it("emits handleRemove with item id when remove button is clicked", async () => {
    const wrapper = mountCartItem({ selectedItem: itemMock.id });
    await wrapper.find(".cart-item__remove-btn").trigger("click");
    expect(wrapper.emitted("handleRemove")).toBeTruthy();
    expect(wrapper.emitted("handleRemove")[0]).toEqual([itemMock.id]);
  });

  it("renders QuantityInput with correct value", () => {
    const wrapper = mountCartItem();
    const qty = wrapper.findComponent({ name: "QuantityInput" });
    expect(qty.exists()).toBe(true);
    expect(qty.props("value")).toBe(itemMock.quantity);
  });
});
