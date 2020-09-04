describe('Test of myFirstCardGame', function () {
    beforeEach( function(){
    cy.visit('https://hankanallt.github.io/myfirstGame/')
});
    it('As a Admin i would like to Verify gameinfo "TIME" so that i can see the time is ticking', function (){
    cy      
            .get('[class="btn"]')  
            .wait(3000)          
            .get('.row > :nth-child(1)').contains('Start Game')
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
                .get('.name')
                .contains('Harkanwal Singh')

        
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

            it('As a Admin i would like to Verify the GameRules button so that i can Read the Rules', function (){
                cy      
                        .get('[class="box1"]')            
                        .click()
                        .get('.close')
                        .click({force: true});
                        
                        });

                        
            

                        it('As a Admin i would like to Verify the Replay button so that i can Replay the game', function (){
                                cy      
                                        .get('[class="btn"]')            
                                        .click()
                                        .wait(60000)
                                        .contains('Replay')
                                        .click();
})
})