window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Trello.boards = new Trello.Collections.Boards();

    new Trello.Routers.Boards({
        '$rootEl' : $('#main')
    });

    Backbone.history.start();
  }
};
