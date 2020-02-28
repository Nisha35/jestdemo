import React from "react";
import { render } from "@testing-library/react";
import Hello from "./hello";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })

test("should set initialValue from props", () => {
  const initialValue = "foo";
  const hello = shallow(<Hello initialValue={initialValue} />);
  expect(hello.prop('value')).toEqual(initialValue);
});
