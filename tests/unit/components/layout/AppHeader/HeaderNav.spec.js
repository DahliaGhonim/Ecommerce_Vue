import { shallowMount } from "@vue/test-utils";
import HeaderNav from "@/components/layout/AppHeader/HeaderNav.vue";
import { createRouter } from "../../../../helpers/createRouter";

const mountHeaderNav = () =>
  shallowMount(HeaderNav, {
    router: createRouter(),
  });

describe("HeaderNav.vue", () => {
  it("renders the nav element", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.find(".headernav").exists()).toBe(true);
  });

  it("renders the links list", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.find(".headernav__links").exists()).toBe(true);
  });

  it("renders 3 nav links", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.findAll(".headernav__links li").length).toBe(3);
  });

  it("has Home as the first link", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.vm.links[0].title).toBe("Home");
    expect(wrapper.vm.links[0].path).toBe("/");
  });

  it("has Contact as the second link", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.vm.links[1].title).toBe("Contact");
    expect(wrapper.vm.links[1].path).toBe("/contact");
  });

  it("has About as the third link", () => {
    const wrapper = mountHeaderNav();
    expect(wrapper.vm.links[2].title).toBe("About");
    expect(wrapper.vm.links[2].path).toBe("/about");
  });

  it("renders link titles in the template", () => {
    const wrapper = mountHeaderNav();
    const text = wrapper.text();
    expect(text).toContain("Home");
    expect(text).toContain("Contact");
    expect(text).toContain("About");
  });
});
