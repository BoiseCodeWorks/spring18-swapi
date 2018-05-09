function DragonController() {

  //private parts
  var ds = new DragonService()

  function drawGames(games) {
    var template = ''
    //itterate over obj not array....
    for (var id in games) {
      var game = games[id]
      template += `<div>
        <button onclick="app.controllers.dragonController.setActiveGame('${game._id}')">${game._champion.name} vs ${game._dragon.name} </button>
      </div>`
    }
    document.getElementById('games').innerHTML = template
  }

  function drawGame(game) {
    var attacksTemplate = ''
    for (var attack in game._champion.attacks) {
      attacksTemplate += `<button onclick="app.controllers.dragonController.attack('${attack}')">${attack}</button>`
    }
    var template = `<div style="display: flex;">
    <div>
      <h3>${game._champion.name} - ${game._champion.hp}</h3>
      ${attacksTemplate}
    </div>  
    <div style="margin-left: 1rem;">
      <h3>${game._dragon.name} - ${game._dragon.currentHP}/${game._dragon.maxHP}</h3>
    </div>
    </div>`
    document.getElementById('active-game').innerHTML = template
  }


  //public parts

  this.getGames = function getGames() {
    ds.getGames(drawGames)
  }

  this.setActiveGame = function setActiveGame(id) {
    document.getElementById('games').innerHTML = ''
    ds.setActiveGame(id, drawGame)
  }

  this.attack = function attack(attackType) {
    ds.attack(attackType, drawGame)
  }


}