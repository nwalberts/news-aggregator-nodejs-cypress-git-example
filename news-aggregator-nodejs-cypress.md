After going through the articles on Cypress, it's time to bring some of that test coverage to the `news-aggregator-nodejs` exercise!

### Learning Objectives

- Write feature tests using Cypress.
- Practice TDD with supplied tests.

### Getting Setup

```no-highlight
et get news-aggregator-nodejs-cypress
cd news-aggregator-nodejs-cypress
yarn install
```

In one terminal window run:

```no-highlight
yarn run dev
```

In a second terminal window run:

```no-highlight
yarn run test:open
```

### Overview

A completed version of `news-aggregator-nodejs` has been provided, but it's lacking some tests. Our job will be to fill out any empty `it` blocks in the provided spec files, `01_userViewsArticlesIndex.spec.js` & `02_userAddsANewArticles.spec.js` and also satisfy any written tests.

Let's take a look at the first spec file.

```JavaScript
// 01_userViewsArticlesIndex.spec.js

/// <reference types="cypress" />

context("Articles Index", () => {
  beforeEach(() => {})

  it("has the correct header", () => {})

  it("has a link to go to the new article form", () => {})

  it("lists all articles", () => {})
})
```

Each section has been defined for us to fill in the details of the test. When testing our applications with Cypress, remember that Cypress is actually interacting with our app. This means that we need to treat Cypress like a human using our application and we need to set up the actions a user would take. The first action we need to consider is navigating to the webpage - in this example, navigating to the index page for all articles. The `beforeEach` block is a great place to set that up so that each `it` block within this test will navigate to the correct web page.

When testing to find some content on a page, it's always a good idea to check the view and make sure that content is being displayed first! We can look at the `articles/index.hbs` to see what's being rendered onto the page. Then, with the app running, `yarn run dev`, we can visit the articles index page in the browser to confirm this HTML is visible.

```HandleBars
<h1>Articles</h1>

<a href="/articles/new">Click here to add a new article!</a>

<ul>
  {{#each articles}}
  <div>
    <li>Title: {{this.title}}</li>
    <li>Description: {{this.description}}</li>
    <li><a href={{this.url}} target="_blank" rel="noopener noreferrer">{{this.url}}</a></li>
  </div>
  <br>
  {{/each}}
</ul>
```

The Cypress test is checking that the page `"has the correct header"`, which we can see an `h1` element in this view that we could target for the test. The next test case is looking for `"has a link to go to the new article form"`. The anchor tag, `<a>`, is setting up a link for the app, and we should consider testing that the specific text of the anchor tag is visible on the page, we can click on the link, and that the link either has the correct `href` that we expect, or upon clicking the link we are brought to the correct URL path, `/articles/new`. The last test case in this file wants to see a `"lists all articles"` - testing that the list items, `<li>`, are displaying the correct text content on the page.

Continue to take a look at the provided code and tests, then it's on to writing your own tests!

#### Tips

- Make sure to read the text provided in each `it` block. That will help explain what should be tested within that block.
- Since finished code has been provided, you will need to reference `articles/index.hbs` and `articles/new.hbs` to determine what is being displayed on the page, so that you will know what is available to test.
- Be aware that if you want to seed more `articles` in `articles.json`, you will also need to edit `cypres/fixtures/starterArticles.json` as this is being used in `02_userAddsANewArticle.spec.js` to reset the `articles.json` file after each test.
