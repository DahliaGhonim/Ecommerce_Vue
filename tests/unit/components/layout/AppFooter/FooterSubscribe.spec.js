import { shallowMount } from "@vue/test-utils";
import FooterSubscribe from "@/components/layout/AppFooter/FooterSubscribe.vue";

describe("FooterSubscribe.vue", () => {
  it("renders the subscribe wrapper", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.find(".footer__send-email").exists()).toBe(true);
  });

  it("renders AppLogo", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.findComponent({ name: "AppLogo" }).exists()).toBe(true);
  });

  it("renders the email input", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.find("input[type='email']").exists()).toBe(true);
  });

  it("email input has correct placeholder", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      "Enter your email"
    );
  });

  it("renders the send icon", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.find(".footer__send-icon").exists()).toBe(true);
  });

  it("renders Subscribe heading", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.find(".footer__col-title").text()).toBe("Subscribe");
  });

  it("renders discount text", () => {
    const wrapper = shallowMount(FooterSubscribe, {
      stubs: { AppLogo: true },
    });
    expect(wrapper.text()).toContain("Get 10% off your first order");
  });
});
