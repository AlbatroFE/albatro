import { shallowMount, mount } from "@vue/test-utils";
import Button from "~/button/src/button.vue";

describe("Button", () => {
  it("mount", () => {
    const wrapper = mount(Button, {
      propsData: {
        type: "primary"
      }
    });
    expect(wrapper.element.classList.contains("al-button--primary")).toBe(true);
  });

  it("icon", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "el-icon-search"
      }
    });
    expect(wrapper.element.querySelector(".el-icon-search")).toBeTruthy();
  });
  it("nativeType", () => {
    const wrapper = mount(Button, {
      propsData: {
        nativeType: "submit"
      }
    });
    expect(wrapper.element.getAttribute("type")).toBe("submit");
  });
  it("loading", () => {
    const wrapper = mount(Button, {
      propsData: {
        loading: true
      }
    });

    expect(wrapper.element.classList.contains("is-loading")).toBe(true);
    expect(wrapper.element.querySelector(".al-icon-loading")).toBeTruthy();
  });
  it("disabled", () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.element.classList.contains("is-disabled")).toBe(true);
  });
  it("size", () => {
    const wrapper = mount(Button, {
      propsData: {
        size: "medium"
      }
    });
    expect(wrapper.element.classList.contains("al-button--medium")).toBe(true);
  });
  it("plain", () => {
    const wrapper = mount(Button, {
      propsData: {
        plain: true
      }
    });
    expect(wrapper.element.classList.contains("is-plain")).toBe(true);
  });
  it("round", () => {
    const wrapper = mount(Button, {
      propsData: {
        round: true
      }
    });
    expect(wrapper.element.classList.contains("is-round")).toBe(true);
  });
  it("circle", () => {
    const wrapper = mount(Button, {
      propsData: {
        circle: true
      }
    });

    expect(wrapper.element.classList.contains("is-circle")).toBe(true);
  });
  it("click", () => {
    let result: any;
    expect(result).toBeUndefined();

    const wrapper = mount(Button, {
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    });
    wrapper.trigger("click");

    setTimeout(() => {
      expect(result).toBeDefined();
    }, 20);
  });
  it("click inside", () => {
    let result: any;
    expect(result).toBeUndefined();

    const wrapper = shallowMount(Button, {
      slots: {
        default: ['<span class="inner-slot"></span>']
      },
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    });
    wrapper.find(".inner-slot").trigger("click");
    expect(result).toBeDefined();
  });

  it("click emitted", () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
