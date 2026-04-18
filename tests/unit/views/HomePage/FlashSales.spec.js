import { shallowMount } from "@vue/test-utils";
import FlashSales from "@/views/HomePage/FlashSales.vue";
import { createStore } from "../../../helpers/createStore";
import { createRouter } from "../../../helpers/createRouter";

describe("FlashSales.vue", () => {
  const mountFlashSales = (stateOverrides = {}) =>
    shallowMount(FlashSales, {
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

  it("renders the flash-sales section", () => {
    const wrapper = mountFlashSales();
    expect(wrapper.find(".flash-sales").exists()).toBe(true);
  });

  it("renders AppHeading", () => {
    const wrapper = mountFlashSales();
    expect(wrapper.findComponent({ name: "AppHeading" }).exists()).toBe(true);
  });

  it("renders AppCarousel", () => {
    const wrapper = mountFlashSales();
    expect(wrapper.findComponent({ name: "AppCarousel" }).exists()).toBe(true);
  });

  it("shows loading message when isLoading is true", () => {
    const wrapper = mountFlashSales({ isLoading: true });
    expect(wrapper.text()).toContain("Loading...");
  });

  it("shows error message when error exists", () => {
    const wrapper = mountFlashSales({ error: "Something went wrong" });
    expect(wrapper.text()).toContain("Something went wrong");
  });

  it("renders products when loaded", () => {
    const wrapper = mountFlashSales({
      productsList: [
        {
          id: 1,
          title: "Product 1",
          price: 100,
          thumbnail: "img.png",
          discountPercentage: 0,
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
          thumbnail: "img.png",
          discountPercentage: 0,
        },
      ],
    });
    expect(wrapper.findAllComponents({ name: "ProductCard" }).length).toBe(2);
  });

  it("slices products to max 8", () => {
    const productsList = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
      price: 100,
      thumbnail: "img.png",
    }));
    const wrapper = mountFlashSales({ productsList });
    expect(wrapper.vm.products.length).toBe(8);
  });
});
