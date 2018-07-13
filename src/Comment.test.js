import React from "react";
import { shallow, mount, render } from "enzyme";
import Comment from "./Comment";

describe("<Comment />", () => {
  const comments = { comment: "teste" };
  it("renders without crashing", () => {
    const wrapper = shallow(<Comment comments={comments} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.is(".alert.alert-secondary")).toBe(true);
    expect(wrapper.text()).toBe(comments.comment);
  });
});
