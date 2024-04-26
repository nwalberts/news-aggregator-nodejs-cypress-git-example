/// <reference types="cypress" />

import newArticle from "../../fixtures/newArticle.json"
import starterArticles from "../../fixtures/starterArticles.json"
const articlesFilePath = "articles.json"

context("Articles New", () => {
  beforeEach(() => {})

  it("adds an article to the list upon submitting the form", () => {})

  it("has a link to go to the article index page", () => {})

  afterEach(() => {
    cy.writeFile(articlesFilePath, JSON.stringify(starterArticles))
  })
})
