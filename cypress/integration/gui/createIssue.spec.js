/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue', () => {
    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project:{
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
    }
    beforeEach(() => {
        cy.login()
        cy.api_createProject(issue.project) //iniciando o projeto via API, o teste roda muito mais rápido
    })

    it('successfully', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
          .should('contain', issue.title)
          .and('contain', issue.description)
    })
})
