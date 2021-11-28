/// <reference types="Cypress" />

context("로그인 한 유저 메인 페이지", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("홈페이지 접속이 가능하다.", () => {
    cy.log("hi");
  });
});
