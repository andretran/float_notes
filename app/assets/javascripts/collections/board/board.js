Trello.Collections.Boards = Backbone.Collection.extend({
  model: Trello.Models.Board,
  url: '/api/boards',

  getOrFetch: function (id) {
    var boards = this;

    var baord;
    if (board = this.get(id)) {
      board.fetch();
    } else {
      board = new Trello.Models.Board({ id: id });
      board.fetch({
        success: function () { boards.add(board); }
      });
    }

    return board;
  }

});
