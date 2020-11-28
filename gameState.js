class Game{
    constructor(){
    }
    getState(){
        var Ref=database.ref("gameState");
        Ref.on("value",(data)=>{
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
    async start(){
        if(gameState===0){
            player=new Player()
            var countRef=await database.ref("playerCount").once("value");
            if(countRef.exists()){
                playerCount=countRef.val()
                player.getCount()
            }
            form=new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide();
        Player.getPlayer();
        if(allPlayers!==undefined){
            var index = 0;
            var x = 175;
            var y;
            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHight-allPlayers[plr].distance;
            }
        }
    }
}