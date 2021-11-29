/// <reference types="Cypress" />

context("로그인 한 유저 메인 페이지", () => {
  beforeEach(() => {
    cy.server();

    cy.intercept("/page?page=*", { fixture: "studyList.json" }).as(
      "getStudyList",
    );
    cy.intercept("/category?point=true", {
      fixture: "category.json",
    }).as("getCategoryList");
    cy.intercept("/study?id=*", {
      fixture: "study.json",
    }).as("getStudyDetail");

    cy.login();
    cy.visit("/");

    cy.wait("@getStudyList");
  });

  it("유저 메인 페이지 접근이 가능하다.", () => {
    cy.get("[data-testid=user-main-container]").eq(0);
  });

  it("유저 메인 접속 시 스터디 정보를 가져온다.", () => {
    cy.get("[data-testid=study-list-element]").within((items) => {
      expect(items).to.have.length(19);
    });
  });

  it("스크롤 하단에 위치할 때마다 스터디 정보를 가져온다.", () => {
    cy.get("[data-testid=study-list-element]").within((items) => {
      expect(items).to.have.length(19);
    });

    cy.get("[data-testid=user-main-container]")
      .scrollTo("bottom")
      .wait("@getStudyList");
    cy.get("[data-testid=study-list-element]").within((items) => {
      expect(items).to.have.length(38);
    });
  });

  it("스터디를 클릭하면 스터디 상세 페이지로 이동함.", () => {
    cy.get("[data-testid=study-list-element]").first().click();
    cy.checkPath("/study/29");
  });

  it("플로팅 버튼 누르면 스터디 생성 페이지로 이동함.", () => {
    cy.get("[data-testid=floating-create-study-btn]").eq(0);
    cy.get("[data-testid=floating-create-study-btn]").click();
    cy.checkPath("/study/create");
  });

  it("카테고리 추천 버튼이 3개 나타나고 누르면 필터링 페이지로 이동함.", () => {
    cy.get("[data-testid=recommended-category-btn]").within((items) => {
      expect(items).to.have.length(3);
    });
    cy.get("[data-testid=recommended-category-btn]").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/filter");
      expect(loc.search).to.eq("?take=13");
    });
  });

  it("상단 검색 버튼을 누르면 필터링 페이지로 이동함.", () => {
    cy.get("[data-testid=search-box-btn]").click();
    cy.checkPath("/filter");
  });
});
