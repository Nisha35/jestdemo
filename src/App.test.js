import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Hello from "./hello";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('should set initialValue from props', () => {
//   const initialValue = 'foo';
//   const simpleInput = shallow(<App name={initialValue} />);
//   const {getByText} = render(<App name='abc' />)
//   console.log("TCL: getByText",)
//   expect(getByText('name')).toBe(initialValue);
// });

describe("some test", () => {
  it("test somthing", () => {
    const hello = shallow(<Hello />);
  });
});
