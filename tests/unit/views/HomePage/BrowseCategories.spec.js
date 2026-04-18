import { shallowMount } from "@vue/test-utils";
import BrowseCategories from "@/views/HomePage/BrowseCategories.vue";
import { createStore } from "../../../helpers/createStore";
import { createRouter } from "../../../helpers/createRouter";

const mockCategories = [
  { name: "Beauty", slug: "beauty", icon: "test-file-stub" },
  { name: "Furniture", slug: "furniture", icon: "test-file-stub" },
  { name: "Fragrances", slug: "fragrances", icon: "test-file-stub" },
];

describe("BrowseCategories.vue", () => {
  const mountBrowseCategories = (stateOverrides = {}) =>
    shallowMount(BrowseCategories, {
      store: createStore({ state: stateOverrides }),
      router: createRouter(),
      stubs: { AppHeading: true, BrowseCategory: true },
    });

  it("renders the browse-categories section", () => {
    const wrapper = mountBrowseCategories();
    expect(wrapper.find(".browse-categories").exists()).toBe(true);
  });

  it("shows loading message when categoriesLoading is true", () => {
    const wrapper = mountBrowseCategories({ categoriesLoading: true });
    expect(wrapper.text()).toContain("Loading...");
  });

  it("shows error when categoriesError exists", () => {
    const wrapper = mountBrowseCategories({ categoriesError: "Failed" });
    expect(wrapper.text()).toContain("Failed");
  });

  it("renders BrowseCategory for each category (max 6)", () => {
    const wrapper = mountBrowseCategories({
      browseCategoryList: mockCategories,
    });
    expect(wrapper.findAllComponents({ name: "BrowseCategory" }).length).toBe(
      3
    );
  });

  it("slices categories to max 6", () => {
    const browseCategoryList = Array.from({ length: 10 }, (_, i) => ({
      name: `Cat ${i}`,
      slug: `cat-${i}`,
      icon: "test-file-stub",
    }));
    const wrapper = mountBrowseCategories({ browseCategoryList });
    expect(wrapper.vm.categories.length).toBe(6);
  });

  it("navigates to products page with category query on goToCategory", () => {
    const router = createRouter();
    const push = jest.spyOn(router, "push");
    const wrapper = shallowMount(BrowseCategories, {
      store: createStore({ state: { browseCategoryList: mockCategories } }),
      router,
      stubs: { AppHeading: true, BrowseCategory: true },
    });
    wrapper.vm.goToCategory("beauty");
    expect(push).toHaveBeenCalledWith({
      path: "/products",
      query: { category: "beauty" },
    });
  });
});
