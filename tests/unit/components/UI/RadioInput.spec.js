import { shallowMount } from "@vue/test-utils";
import RadioInput from "@/components/UI/RadioInput.vue";

const defaultProps = {
  id: "payment-cash",
  name: "payment",
  value: "cash",
  label: "Cash on delivery",
};

describe("RadioInput.vue", () => {
  it("renders the wrapper", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find(".radio-input").exists()).toBe(true);
  });

  it("renders a radio input", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("input[type='radio']").exists()).toBe(true);
  });

  it("sets the correct id on the input", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("input").attributes("id")).toBe(defaultProps.id);
  });

  it("sets the correct name on the input", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("input").attributes("name")).toBe(defaultProps.name);
  });

  it("sets the correct value on the input", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("input").attributes("value")).toBe(defaultProps.value);
  });

  it("renders the label with correct text", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("label").text()).toBe(defaultProps.label);
  });

  it("label for attribute matches input id", () => {
    const wrapper = shallowMount(RadioInput, { propsData: defaultProps });
    expect(wrapper.find("label").attributes("for")).toBe(defaultProps.id);
  });
});
