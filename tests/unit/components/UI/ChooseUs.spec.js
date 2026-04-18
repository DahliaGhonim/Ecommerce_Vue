import { shallowMount } from "@vue/test-utils";
import ChooseUs from "@/components/UI/ChooseUs.vue";

const chooseUsMock = {
  icon: "test-file-stub",
  title: "FREE AND FAST DELIVERY",
  text: "Free delivery for all orders over $140",
};

describe("ChooseUs.vue", () => {
  it("renders the wrapper", () => {
    const wrapper = shallowMount(ChooseUs, {
      propsData: { chooseUs: chooseUsMock },
    });
    expect(wrapper.find(".choose-us").exists()).toBe(true);
  });

  it("renders the icon with the correct src", () => {
    const wrapper = shallowMount(ChooseUs, {
      propsData: { chooseUs: chooseUsMock },
    });
    expect(wrapper.find(".choose-us-icon").attributes("src")).toBe(
      chooseUsMock.icon
    );
  });

  it("renders the title", () => {
    const wrapper = shallowMount(ChooseUs, {
      propsData: { chooseUs: chooseUsMock },
    });
    expect(wrapper.find(".choose-us-title").text()).toBe(chooseUsMock.title);
  });

  it("renders the text", () => {
    const wrapper = shallowMount(ChooseUs, {
      propsData: { chooseUs: chooseUsMock },
    });
    expect(wrapper.text()).toContain(chooseUsMock.text);
  });
});
