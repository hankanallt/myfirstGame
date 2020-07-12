    
	var flips = 0;
	var timer;
	var founded = 0;
    var maxPairs = 0;
    var won = {};
    //var loose = {};
    //var audio= {};
    var play= {};

    
    // function to play audio, btn starts the game and the audio
    $(document).ready(function() {
    var audio = {};
    var txt = $(this).text();

    $('.btn').click(function () {
        audio = new Audio('/Assets/Audio/Laugh.mp3');
        audio.play()
        });
    });

	$(document).ready(function() {
	
		var nrOfCards = $(".flip-card").length;
		maxPairs = nrOfCards/2;
	
      $(".btn").click(function() {
        var txt = $(this).text();
       
		if(txt == "Replay")
		{
			reset();
            countdown(30);
		}
		else
		{
            countdown(60);
		}

	  
	   getCards();
	   events(); 
       $(this).hide();
       
       
      });
    });
    
    
    $('.flip-card').click(function () {
        audio = new Audio('/Assets/Audio/flip.wav');
        audio.play()
    });
	
	function reset()
	{
		if(flips > 0)
		{
			flips = 0;
		}
		
		if(founded > 0)
		{
			founded = 0;
		}
		
		$('.flip-card').each(function() {
			$(this).removeClass('founded');
		});
        
        
        
		flipBackAllCards();
		
		$("#flips").text("0");
        $("#founded").text("0");
	
    }
   
    $(document).ready(function() {
	
		var audio = $(".flip-card").length;

        if(won)
		{
            play('/Assets/Audio/victory.wav');
		}
		else
		{
            play("'/Assets/Audio/gameOver.wav");
		}
    
    
    });
    

    function gamveOver(won)
    
	{
		$('.flip-card').unbind();
		clearInterval(timer);
		
		if(won)
		{
            alert("you won")
            
		}
		else
		{
            alert("you loose")
            
		}
		
		$(".btn").show();
        $(".btn").text("Replay");
        
	}

	
	function events()
	{
		$('.flip-card').click(function() {
			$(this).toggleClass('active');
			
			flips++;
			
			$("#flips").text(flips);

			if(flips%2 == 0)
			{
                audio.play('/Assets/Audio/match.wav')
				checkIfEqual();
			}
			
			
		});
	}
	

	function flipBackAllCards()
	{
		$('.flip-card').each(function() {
			$(this).removeClass('active');
		});
	}

	
	function checkIfEqual()
	{
		var card1 = $(".active").eq(0).attr("data-id");
		var card2 = $(".active").eq(1).attr("data-id");
		
		
		if(card1 == card2)
		{
			founded++;
			
            $("#founded").text(founded);
			
			if(founded < maxPairs)
			{
				$(".active").each(function()
				{
					$(this).removeClass("active").addClass("founded");
				});
			}
			else
			{
                
                gamveOver(true);
			}
		}
		else
		{
			setTimeout(function(){
		
				flipBackAllCards();
			
			 }, 500);
		}
	}


    function countdown(sec) {

      timer = setInterval(function() {
        if (sec > 0) {
          sec--;
          $("#time-remaining").text(sec);
        } else {
		
			//Stop counter
          clearInterval(timer);
		  gamveOver(false);
            
        }
      }, 1000);
    }
	


    function getCards() {
      var cards = [];
       $(".flip-card").each(function() {
        var card = {};
        card.id = $(this).attr("data-id");
        card.image = $(this).find(".back-face").attr("src");
        cards.push(card);
      });
      
      shuffleCards(cards);
    }
    
    function shuffleCards(cards)
    {
      cards.sort(function(a, b){return 0.5 - Math.random()});
      
      $(".flip-card").each(function(indx, item) {
        var id = cards[indx].id;
        var img = cards[indx].image;
        $(this).attr("data-id", id);
        $(this).find(".back-face").attr("src", img).attr("alt", id);
      });
    }
