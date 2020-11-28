class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
        var pcountref=database.ref("Playercount");
        pcountref.on("value",(data)=>{
            playerCount = data.val();

        })
    }
    updateCount(count){
    database.ref("/").update({
        playerCount:count
        
    })
    }
    updatePlayer(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        })
    }
    static getPlayer(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}