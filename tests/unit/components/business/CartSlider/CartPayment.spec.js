import { shallowMount } from "@vue/test-utils";
import CartPayment from "@/components/business/CartSlider/CartPayment.vue";

const mountCartPayment = () =>
  shallowMount(CartPayment, {
    stubs: { RadioInput: true, AppButton: true },
  });

describe("CartPayment.vue", () => {
  it("renders the payment form", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.find(".cart-payment").exists()).toBe(true);
  });

  it("renders 2 RadioInput components", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.findAllComponents({ name: "RadioInput" }).length).toBe(2);
  });

  it("renders 2 AppButton components", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.findAllComponents({ name: "AppButton" }).length).toBe(2);
  });

  it("renders 4 payment icons", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.findAll(".cart-payment__icons img").length).toBe(4);
  });

  it("renders coupon input", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.find(".cart-payment__coupon-input").exists()).toBe(true);
  });

  it("has 4 items in payments data", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.vm.payments.length).toBe(4);
  });

  it("renders a form element", () => {
    const wrapper = mountCartPayment();
    expect(wrapper.find("form").exists()).toBe(true);
  });
});
