describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify the button Start so that i can Start the game', function (){
    cy      
            .get('button')
            .contains('Start')
            .should('be.visible')
            .click()
            .wait(60000)
            .contains('Replay')
            .click();
    
        
    });
});









