import { shallowMount } from "@vue/test-utils";
import AppFooter from "@/components/layout/AppFooter/AppFooter.vue";
import { createRouter } from "../../../../helpers/createRouter";

const mountAppFooter = () =>
  shallowMount(AppFooter, {
    router: createRouter(),
    stubs: {
      FooterSubscribe: true,
      FooterColumn: true,
      FooterDownloadApp: true,
      FooterCopyright: true,
    },
  });

describe("AppFooter.vue", () => {
  it("renders the footer element", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.find(".footer").exists()).toBe(true);
  });

  it("renders FooterSubscribe", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.findComponent({ name: "FooterSubscribe" }).exists()).toBe(
      true
    );
  });

  it("renders FooterDownloadApp", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.findComponent({ name: "FooterDownloadApp" }).exists()).toBe(
      true
    );
  });

  it("renders FooterCopyright", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.findComponent({ name: "FooterCopyright" }).exists()).toBe(
      true
    );
  });

  it("renders 3 FooterColumn components", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.findAllComponents({ name: "FooterColumn" }).length).toBe(3);
  });

  it("has 3 items in footerColumns", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.vm.footerColumns.length).toBe(3);
  });

  it("first column has title 'Support'", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.vm.footerColumns[0].title).toBe("Support");
  });

  it("second column has title 'Account'", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.vm.footerColumns[1].title).toBe("Account");
  });

  it("third column has title 'Quick Link'", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.vm.footerColumns[2].title).toBe("Quick Link");
  });

  it("renders footer__main wrapper", () => {
    const wrapper = mountAppFooter();
    expect(wrapper.find(".footer__main").exists()).toBe(true);
  });
});
