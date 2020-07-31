describe('Test of Developed by Harkanwal Singh', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify the Link "Developed by Harkanwal Singh" so that i can look at the Developers CV', function (){
    cy      
            .get('[style="float: right; text-align: right; margin-right: 20px"] > a')            
            .contains('Github')
            .should('be.visible')
            .click()
            .get('github.com/hankanallt/myfirstGame')
            .contains('hankanallt/myfirstGame')
    
    });
});