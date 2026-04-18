import { shallowMount } from "@vue/test-utils";
import HeaderSearch from "@/components/layout/AppHeader/HeaderSearch.vue";

describe("HeaderSearch.vue", () => {
  it("renders the search wrapper", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find(".header-search").exists()).toBe(true);
  });

  it("renders the search input", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find(".header-search__input").exists()).toBe(true);
  });

  it("renders the search icon", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find(".header-search__icon").exists()).toBe(true);
  });

  it("input has correct placeholder", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      "What are you looking for?"
    );
  });

  it("input has correct id", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find("input").attributes("id")).toBe("search");
  });

  it("search icon has correct alt text", () => {
    const wrapper = shallowMount(HeaderSearch);
    expect(wrapper.find("img").attributes("alt")).toBe("search");
  });
});
