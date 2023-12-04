import React from "react";
import { shallow } from "enzyme";
import SectionComponent from "./SectionComponent";

describe("SectionComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SectionComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
