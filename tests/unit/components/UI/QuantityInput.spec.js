import { shallowMount } from "@vue/test-utils";
import QuantityInput from "@/components/UI/QuantityInput.vue";

describe("QuantityInput.vue", () => {
  it("renders the input field", () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 1 },
    });
    expect(wrapper.find(".quantity-input__field").exists()).toBe(true);
  });

  it("displays the correct value from prop", () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 5 },
    });
    expect(wrapper.find(".quantity-input__field").element.value).toBe("5");
  });

  it("emits change with incremented value when increment is clicked", async () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 3 },
    });
    await wrapper.findAll(".quantity-input__btn").at(0).trigger("click");
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")[0]).toEqual([4]);
  });

  it("emits change with decremented value when decrement is clicked", async () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 3 },
    });
    await wrapper.findAll(".quantity-input__btn").at(1).trigger("click");
    expect(wrapper.emitted("change")[0]).toEqual([2]);
  });

  it("does not emit change when decrement is clicked and value is 1", async () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 1 },
    });
    await wrapper.findAll(".quantity-input__btn").at(1).trigger("click");
    expect(wrapper.emitted("change")).toBeFalsy();
  });

  it("emits change on valid input", () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 1 },
    });
    wrapper.vm.onInput({ target: { value: "5" } });
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")[0]).toEqual([5]);
  });

  it("resets to 1 on blur when value is invalid", async () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 1 },
    });
    const mockEvent = { target: { value: "-3" } };
    wrapper.vm.onBlur(mockEvent);
    expect(mockEvent.target.value).toBe(1);
    expect(wrapper.emitted("change")[0]).toEqual([1]);
  });

  it("renders two control buttons", () => {
    const wrapper = shallowMount(QuantityInput, {
      propsData: { value: 1 },
    });
    expect(wrapper.findAll(".quantity-input__btn").length).toBe(2);
  });
});
