import { shallowMount } from "@vue/test-utils";
import AppCarousel from "@/components/UI/AppCarousel.vue";

describe("AppCarousel.vue", () => {
  it("renders the carousel wrapper", () => {
    const wrapper = shallowMount(AppCarousel);
    expect(wrapper.find(".carousel").exists()).toBe(true);
  });

  it("does not add full-width class by default", () => {
    const wrapper = shallowMount(AppCarousel);
    expect(wrapper.find(".carousel").classes()).not.toContain(
      "carousel--full-width"
    );
  });

  it("adds full-width class when fullWidth prop is true", () => {
    const wrapper = shallowMount(AppCarousel, {
      propsData: { fullWidth: true },
    });
    expect(wrapper.find(".carousel").classes()).toContain(
      "carousel--full-width"
    );
  });

  it("does not add grid class when rows is 1", () => {
    const wrapper = shallowMount(AppCarousel, {
      propsData: { rows: 1 },
    });
    expect(wrapper.find(".carousel__track").classes()).not.toContain(
      "carousel__track--grid"
    );
  });

  it("adds grid class when rows is 2", () => {
    const wrapper = shallowMount(AppCarousel, {
      propsData: { rows: 2 },
    });
    expect(wrapper.find(".carousel__track").classes()).toContain(
      "carousel__track--grid"
    );
  });

  it("renders carousel end div when fullWidth is true", () => {
    const wrapper = shallowMount(AppCarousel, {
      propsData: { fullWidth: true },
    });
    expect(wrapper.find(".carousel__end").exists()).toBe(true);
  });

  it("does not render carousel end div when fullWidth is false", () => {
    const wrapper = shallowMount(AppCarousel, {
      propsData: { fullWidth: false },
    });
    expect(wrapper.find(".carousel__end").exists()).toBe(false);
  });

  it("renders two control buttons", () => {
    const wrapper = shallowMount(AppCarousel);
    expect(wrapper.findAll(".carousel__controls-btn").length).toBe(2);
  });

  it("calls prev() when left button is clicked", async () => {
    const prev = jest.spyOn(AppCarousel.methods, "prev");
    const wrapper = shallowMount(AppCarousel);
    await wrapper.findAll(".carousel__controls-btn").at(0).trigger("click");
    expect(prev).toHaveBeenCalled();
    prev.mockRestore();
  });

  it("calls next() when right button is clicked", async () => {
    const next = jest.spyOn(AppCarousel.methods, "next");
    const wrapper = shallowMount(AppCarousel);
    await wrapper.findAll(".carousel__controls-btn").at(1).trigger("click");
    expect(next).toHaveBeenCalled();
    next.mockRestore();
  });
});
