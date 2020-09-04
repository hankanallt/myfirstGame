describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify gameinfo "TIME" so that i can see the time is ticking', function (){
    cy      
            .get('[class="btn"]')  
            .wait(3000)          
            .should('be.visible')
            .click()
            .get(':nth-child(1) > .flip-card-inner > .flip-card-front > .front')
            .click({ multiple: true, force: true })
            .get(':nth-child(2) > .flip-card-inner > .flip-card-front > .front')
            .click({ force: true });
    
    });

    it('As a Admin i would like to Verify the Link "Developed by Harkanwal Singh" so that i can look at the Developers CV', function (){
        cy      
                
                .get('.footer > div > p')
                .click()
        
        });

        it('As a Admin i would like to Verify the button Game Rules so that i can Read the rules of the game', function (){
            cy      
                    .get('.button1')
                    .contains('Game Rules')
                    .should('be.visible')
                    .click()
                    .get('.close')
                    .click({force: true});
            
                
            });

            it('As a Admin i would like to Verify the time so that i know it runs when the game is Started', function (){
                cy      
                        .get('[class="btn"]')            
                        .click()
                        .get('.gameinfo-container > :nth-child(1)')
                        .contains('56')
                        .should('have.value', '56');
                    
                });
                it('As a Admin i would like to Verify the Replay button so that i can Replay the game', function (){
                        cy      
                                .get('[class="btn"]')            
                                .click()
                                .wait(60000)
                                .contains('Replay')
                                .click();
                        
                        });
});