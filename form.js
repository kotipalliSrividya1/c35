class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var input=createInput('Name');
        var button=createButton('Play');
        input.position(400,300);
        button.position(450,350);
        var greetings= createElement('h3');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            playerCount+=1;
            player.update(input.value())
            player.updateCount(playerCount);
            greetings.html("Hello "+ input.value());
            greetings.position(330,160);
        })
    }
}