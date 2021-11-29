/// <reference types="Cypress" />

context("로그인 한 유저 메인 페이지", () => {
  beforeEach(() => {
    cy.server();

    cy.intercept("/page?page=*", { fixture: "studyList.json" }).as(
      "메인 스터디 리스트",
    );
    cy.intercept("/category?point=true", {
      fixture: "category.json",
    }).as("카테고리 리스트");

    cy.login();
    cy.visit("/");
  });

  it("홈페이지 접속이 가능하다.", () => {
    cy.log("hi");
  });
});
