import { shallowMount } from "@vue/test-utils";
import ExploreProducts from "@/views/HomePage/ExploreProducts.vue";
import { createStore } from "../../../helpers/createStore";
import { createRouter } from "../../../helpers/createRouter";

describe("ExploreProducts.vue", () => {
  const mountExploreProducts = (stateOverrides = {}) =>
    shallowMount(ExploreProducts, {
      store: createStore({ state: stateOverrides }),
      router: createRouter(),
      stubs: {
        AppHeading: true,
        AppCarousel: true,
        AppButton: true,
        ProductCard: true,
        RouterLink: true,
      },
    });

  it("renders the explore-products section", () => {
    const wrapper = mountExploreProducts();
    expect(wrapper.find(".explore-products").exists()).toBe(true);
  });

  it("renders AppHeading", () => {
    const wrapper = mountExploreProducts();
    expect(wrapper.findComponent({ name: "AppHeading" }).exists()).toBe(true);
  });

  it("renders AppCarousel with rows=2", () => {
    const wrapper = mountExploreProducts();
    const carousel = wrapper.findComponent({ name: "AppCarousel" });
    expect(carousel.exists()).toBe(true);
    expect(carousel.props("rows")).toBe(2);
  });

  it("shows loading message when isLoading is true", () => {
    const wrapper = mountExploreProducts({ isLoading: true });
    expect(wrapper.text()).toContain("Loading...");
  });

  it("shows error message when error exists", () => {
    const wrapper = mountExploreProducts({ error: "Failed to load" });
    expect(wrapper.text()).toContain("Failed to load");
  });

  it("renders all products", () => {
    const productsList = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
      price: 100,
      thumbnail: "img.png",
    }));
    const wrapper = mountExploreProducts({ productsList });
    expect(wrapper.findAllComponents({ name: "ProductCard" }).length).toBe(6);
  });
});
