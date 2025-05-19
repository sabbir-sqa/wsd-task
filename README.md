# Magento Automation Framework

## Overview
This is a test automation framework built using **Cypress** and follows **Page Object Model (POM)** pattern to test the UI functionality of https://magento.softwaretestingboard.com 

## Features
- Cypress-based UI tests
- POM structure for scalability
- Configurable environment variables
- Modular, reusable code
- Screenshots on failure

## Prerequisites
- Node.js
- npm/yarn

## Setup
1. Clone repo: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run tests: `npx cypress open`

## Running Tests
- Open Cypress GUI: `npx cypress open`
- Run headless: `npx cypress run`

## Folder Structure
See above for full structure.

🧩 Framework Design Choices
---------------------------

### Page Object Model (POM)

*   Each web page is represented as a JavaScript class.
    
*   Promotes **reusability** and **separation of concerns** between test logic and UI actions.
    
*   Makes it easier to update tests when the UI changes — only the page class needs modification.
    

### Use of Fixtures

*   Keeps test data externalized in JSON files.
    
*   Improves readability and allows for **data-driven testing** if needed.
    
*   Avoids hardcoding values in test scripts.
    

### Integration of API Testing

*   Added API tests to ensure the backend services function correctly.
    
*   Uses Cypress's native support for HTTP requests (**cy.request()**).
    
*   Ensures both UI and service layers are validated independently.
    

### Modular and Scalable Architecture

*   Clear separation between test files, page objects, and utilities.
    
*   Easy to add more test cases, pages, or API helpers in the future.
    
*   Follows clean code principles for better maintenance.
    

### Readability and Maintainability

*   All test cases are written in a descriptive and readable format.
    
*   Each step in the test corresponds to a clearly named method in the page object.
    
*   Makes debugging and reviewing test failures much easier.
