import { shallowMount } from "@vue/test-utils";
import SortSelect from "@/components/UI/SortSelect.vue";

describe("SortSelect.vue", () => {
  it("renders the wrapper", () => {
    const wrapper = shallowMount(SortSelect);
    expect(wrapper.find(".sort-select").exists()).toBe(true);
  });

  it("renders the label with text 'Sort by'", () => {
    const wrapper = shallowMount(SortSelect);
    expect(wrapper.find("label").text()).toBe("Sort by");
  });

  it("renders a select element", () => {
    const wrapper = shallowMount(SortSelect);
    expect(wrapper.find("select").exists()).toBe(true);
  });

  it("renders 6 options", () => {
    const wrapper = shallowMount(SortSelect);
    expect(wrapper.findAll("option").length).toBe(6);
  });

  it("has default selected value of 'rating'", () => {
    const wrapper = shallowMount(SortSelect);
    expect(wrapper.vm.selected).toBe("rating");
  });

  it("emits change event with selected value when selection changes", async () => {
    const wrapper = shallowMount(SortSelect);
    const select = wrapper.find("select");
    await select.setValue("price-asc");
    await select.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")[0]).toEqual(["price-asc"]);
  });

  it("updates selected data when option is changed", async () => {
    const wrapper = shallowMount(SortSelect);
    const select = wrapper.find("select");
    await select.setValue("price-desc");
    expect(wrapper.vm.selected).toBe("price-desc");
  });
});
