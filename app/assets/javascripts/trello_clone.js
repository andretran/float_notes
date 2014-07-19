window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Trello.boards = new Trello.Collections.Boards();
    var boardIndex = new Trello.Views.BoardIndex({ collection : Trello.boards });

    Trello.boards.fetch({
      success: function () {
        $('#sidebar').html(boardIndex.$el);
      }
    });

    new Trello.Routers.Boards({
        '$rootEl' : $('#panel')
    });
    Backbone.history.start();
  }
};
