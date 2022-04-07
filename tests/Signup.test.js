/**
 * @jest-environment jsdom
 */

import React from "react";
import SignUp from "../components/onboarding/Signup";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

const mockFunction = jest.fn();

describe("Sign up page tests ---------------------", () => {
  it("should render the page", () => {
    shallow(<SignUp />);
  });

  const mountedApp = shallow(<SignUp />);
  it("should call authSignIn on click of get started now button", () => {
    const checkBanksBtn = mountedApp.find("#submit-btn");
    checkBanksBtn.simulate("click");
    //expect(mockFunction).toHaveBeenCalled();
  });
});
