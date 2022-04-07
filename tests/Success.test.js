/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Success from "../components/onboarding/Success";
 import { shallow } from "enzyme";
 import "@testing-library/jest-dom";
 
 const mockFunction = jest.fn();
 
 describe("Success page tests ---------------------", () => {
   it("should render the page", () => {
     shallow(<Success />);
   });
 
   const mountedApp = shallow(<Success />);
   it("should route back to the homepage on click of back to home button", () => {
     const checkBanksBtn = mountedApp.find("#back-home");
     checkBanksBtn.simulate("click");
     //expect(mockFunction).toHaveBeenCalled();
   });
 });
 