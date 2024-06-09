/* eslint-disable no-undef */
describe("Cypress Demo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  
  it("Verifies Texts", () => {
    cy.get('[data-testid="title"]')
      .should("exist")
      .should("have.text", "To-Do List");

    cy.get('[data-testid="todo-input"]').should(
      "have.attr",
      "placeholder",
      "Enter a new task"
    );

    cy.get('[data-testid="todo-btn"]').should("have.text", "Add Task");

    cy.get('[data-testid="todo-input"]')
      .type("Revise For Exams")
      .should("have.value", "Revise For Exams");
  });

  it("Adding & Deleting Tasks", () => {
    // Adding the Task
    cy.get('[data-testid="todo-input"]').type("Revise For Exams");
    cy.get('[data-testid="todo-btn"]').click();

    cy.get('[data-testid="todo-list"]').as("list");

    // Verify that the task is added to the list
    cy.get("@list").contains("li", "Revise For Exams").should("exist");

    // Deletes the Task
    cy.get("@list")
      .contains("li", "Revise For Exams")
      .contains("button", "Delete")
      .click();

    // Verify that the task is deleted from the list
    cy.get("@list").contains("li", "Revise For Exams").should("not.exist");
  });
});
