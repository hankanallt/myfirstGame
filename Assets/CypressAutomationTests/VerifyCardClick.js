describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify gameinfo "TIME" so that i can see the time is ticking', function (){
    cy      
            .get('[class="box"]')            
            .contains('Start Game')
            .should('be.visible')
            .click()
            .get(':nth-child(1) > .flip-card-inner > .flip-card-front > .front')
            .click({ multiple: true, force: true })
            .get(':nth-child(2) > .flip-card-inner > .flip-card-front > .front')
            .click({ force: true });
    
    });
});