import React from "react";
import { mount } from "@cypress/react";
import HelloWorld from "./HelloWorld";

describe("HelloWorld component", () => {
  it("works", () => {
    mount(<HelloWorld />);
    // now use standard Cypress commands
    cy.contains("Hello World!").should("be.visible");
  });
});
