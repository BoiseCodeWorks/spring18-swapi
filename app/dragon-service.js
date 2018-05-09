function DragonService() {

  //private parts
  var baseUrl = '//dragon-vue.herokuapp.com/api/'
  var activeId
  //public parts

  this.getGames = function getGames(cb) {
    $.get(baseUrl + 'game')
      .then(cb)
  }

  this.setActiveGame = function setActiveGame(id, cb) {
    activeId = id
    $.get(baseUrl + 'game/' + id)
      .then(cb)
  }

  this.attack = function attack(attackType, cb) {
    $.ajax({
        url: baseUrl + 'game/' + activeId,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({
          attack: attackType
        })
      })
      .then(cb)

  }

}