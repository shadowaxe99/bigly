```javascript
// Import Cypress
const cypress = require('cypress')

// Define tests
describe('AI Assistant', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('/')
  })

  it('loads the homepage', () => {
    cy.contains('AI Assistant')
  })

  it('understands natural language instructions', () => {
    cy.get('#instructionInput').type('Create a new function')
    cy.get('#submitInstruction').click()
    cy.contains('Function created')
  })

  it('decomposes tasks', () => {
    cy.get('#taskInput').type('Create a new React component')
    cy.get('#submitTask').click()
    cy.contains('Task decomposed')
  })

  it('generates code', () => {
    cy.get('#codeGenerationInput').type('Generate code for a new function')
    cy.get('#submitCodeGeneration').click()
    cy.contains('Code generated')
  })

  it('interacts with the user', () => {
    cy.get('#userInput').type('Hello AI Assistant')
    cy.get('#submitUserInput').click()
    cy.contains('Hello User')
  })

  it('integrates with developer tools', () => {
    cy.get('#devToolsInput').type('Run linter')
    cy.get('#submitDevTools').click()
    cy.contains('Linter run')
  })

  it('writes tests', () => {
    cy.get('#testInput').type('Write a new test')
    cy.get('#submitTest').click()
    cy.contains('Test written')
  })

  it('generates documentation', () => {
    cy.get('#documentationInput').type('Generate documentation')
    cy.get('#submitDocumentation').click()
    cy.contains('Documentation generated')
  })
})
```