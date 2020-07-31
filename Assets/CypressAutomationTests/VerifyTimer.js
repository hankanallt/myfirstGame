describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify the time so that i know it runs when the game is Started', function (){
    cy      
            .get('[class="box"]')            
            .contains('Start Game')
            .should('be.visible')
            .click()
            .get('.gameinfo-container > :nth-child(1)')
            .contains('57')
            .should('have.value', '57');

    
        
    });
});


