import { shallowMount } from "@vue/test-utils";
import FooterColumn from "@/components/layout/AppFooter/FooterColumn.vue";
import { createRouter } from "../../../../helpers/createRouter";

const supportColumn = {
  title: "Support",
  items: ["111 Bijoy sarani", "exclusive@gmail.com", "+88015-88888-9999"],
};

const accountColumn = {
  title: "Account",
  links: ["My Account", "Login / Register", "Cart"],
};

const mountFooterColumn = (footerInfo) =>
  shallowMount(FooterColumn, {
    propsData: { footerInfo },
    router: createRouter(),
  });

describe("FooterColumn.vue", () => {
  it("renders the column wrapper", () => {
    const wrapper = mountFooterColumn(supportColumn);
    expect(wrapper.find(".footer-col").exists()).toBe(true);
  });

  it("renders the column title", () => {
    const wrapper = mountFooterColumn(supportColumn);
    expect(wrapper.find(".footer-col__title").text()).toBe(supportColumn.title);
  });

  it("renders items when footerInfo has items", () => {
    const wrapper = mountFooterColumn(supportColumn);
    expect(wrapper.findAll(".footer-col__text").length).toBe(
      supportColumn.items.length
    );
  });

  it("renders correct item text", () => {
    const wrapper = mountFooterColumn(supportColumn);
    expect(wrapper.text()).toContain("exclusive@gmail.com");
  });

  it("renders links when footerInfo has links", () => {
    const wrapper = mountFooterColumn(accountColumn);
    expect(wrapper.findAll(".footer-col__link").length).toBe(
      accountColumn.links.length
    );
  });

  it("renders correct link text", () => {
    const wrapper = mountFooterColumn(accountColumn);
    expect(wrapper.text()).toContain("My Account");
  });

  it("renders no items when footerInfo has no items", () => {
    const wrapper = mountFooterColumn(accountColumn);
    expect(wrapper.findAll(".footer-col__text").length).toBe(0);
  });

  it("renders no links when footerInfo has no links", () => {
    const wrapper = mountFooterColumn(supportColumn);
    expect(wrapper.findAll(".footer-col__link").length).toBe(0);
  });
});
