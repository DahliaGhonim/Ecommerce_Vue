import { shallowMount } from "@vue/test-utils";
import FooterDownloadApp from "@/components/layout/AppFooter/FooterDownloadApp.vue";

describe("FooterDownloadApp.vue", () => {
  it("renders the download-app wrapper", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.find(".download-app").exists()).toBe(true);
  });

  it("renders the title", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.find(".download-app__title").text()).toBe("Download App");
  });

  it("renders the QR code image", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.find(".download-app__qrcode").exists()).toBe(true);
  });

  it("renders Google Play image", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.find(".download-app__google").exists()).toBe(true);
  });

  it("renders App Store image", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.find(".download-app__apple").exists()).toBe(true);
  });

  it("renders 4 social icons", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.findAll(".download-app__social-icon").length).toBe(4);
  });

  it("has 4 items in socials data", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.vm.socials.length).toBe(4);
  });

  it("renders save text", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.text()).toContain("Save $3 with App New User Only");
  });

  it("social icons are wrapped in anchor tags", () => {
    const wrapper = shallowMount(FooterDownloadApp);
    expect(wrapper.findAll(".download-app__socials a").length).toBe(4);
  });
});
