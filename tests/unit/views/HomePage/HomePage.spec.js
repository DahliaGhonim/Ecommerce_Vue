import { shallowMount } from "@vue/test-utils";
import HomePage from "@/views/HomePage/HomePage.vue";

describe("HomePage.vue", () => {
  const mountHomePage = () =>
    shallowMount(HomePage, {
      stubs: {
        FlashSales: true,
        BrowseCategories: true,
        ExploreProducts: true,
        ChooseUs: true,
      },
    });

  it("renders the home wrapper", () => {
    const wrapper = mountHomePage();
    expect(wrapper.find(".home").exists()).toBe(true);
  });

  it("renders FlashSales component", () => {
    const wrapper = mountHomePage();
    expect(wrapper.findComponent({ name: "FlashSales" }).exists()).toBe(true);
  });

  it("renders BrowseCategories component", () => {
    const wrapper = mountHomePage();
    expect(wrapper.findComponent({ name: "BrowseCategories" }).exists()).toBe(
      true
    );
  });

  it("renders ExploreProducts component", () => {
    const wrapper = mountHomePage();
    expect(wrapper.findComponent({ name: "ExploreProducts" }).exists()).toBe(
      true
    );
  });

  it("renders 3 ChooseUs items", () => {
    const wrapper = mountHomePage();
    expect(wrapper.findAllComponents({ name: "ChooseUs" }).length).toBe(3);
  });

  it("has 3 items in chooseUsList", () => {
    const wrapper = mountHomePage();
    expect(wrapper.vm.chooseUsList.length).toBe(3);
  });

  it("each chooseUs item has id, icon, title and text", () => {
    const wrapper = mountHomePage();
    wrapper.vm.chooseUsList.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("icon");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("text");
    });
  });

  it("renders two separator divs", () => {
    const wrapper = mountHomePage();
    expect(wrapper.findAll(".home__separator").length).toBe(2);
  });
});
