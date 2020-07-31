describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify the Replay button so that i can Replay the game', function (){
    cy      
            .get('[class="box"]')            
            .contains('Start Game')
            .should('be.visible')
            .click()
            .wait(60000)
            .contains('Replay')
            .click();
    
    });
});










