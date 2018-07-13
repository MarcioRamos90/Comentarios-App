import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

describe("<App />", () => {
  const base = {
    syncState: jest.fn()
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.length).toBe(1);
  });

  it("Shold have .container class", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.is(".container")).toBe(true);
  });

  it("Show Comments", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find("Comments").length).toBe(1);
  });

  it("Show NewComment", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find("NewComment").length).toBe(1);
  });

  it("Adds a new comment to state when postNewComment is called", () => {
    const wrapper = mount(<App base={base} />);
    wrapper.instance().postNewComment({ comment: "test" });
    wrapper.instance().postNewComment({ comment: "test1" });
    wrapper.instance().postNewComment({ comment: "test2" });
    const comments = Object.keys(wrapper.instance().state.comments);
    expect(comments.length).toBe(3);
  });
});
