import { shallowMount } from "@vue/test-utils";
import BrowseCategory from "@/views/HomePage/BrowseCategory.vue";

const categoryMock = {
  name: "Beauty",
  slug: "beauty",
  icon: "test-file-stub",
};

describe("BrowseCategory.vue", () => {
  it("renders the category wrapper", () => {
    const wrapper = shallowMount(BrowseCategory, {
      propsData: { category: categoryMock },
    });
    expect(wrapper.find(".category").exists()).toBe(true);
  });

  it("renders the category icon", () => {
    const wrapper = shallowMount(BrowseCategory, {
      propsData: { category: categoryMock },
    });
    expect(wrapper.find(".category__icon").attributes("src")).toBe(
      categoryMock.icon
    );
  });

  it("renders the category name", () => {
    const wrapper = shallowMount(BrowseCategory, {
      propsData: { category: categoryMock },
    });
    expect(wrapper.find(".category__title").text()).toBe(categoryMock.name);
  });

  it("emits click event with slug when clicked", async () => {
    const wrapper = shallowMount(BrowseCategory, {
      propsData: { category: categoryMock },
    });
    await wrapper.find(".category").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")[0]).toEqual([categoryMock.slug]);
  });
});
