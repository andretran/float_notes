Trello.Routers.Boards = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl;
  },



  routes: {
    '' : 'index',
    'boards/:id' : 'show'
  },

  show : function (id) {
    var that = this;

    that._getBoard(id, function(board){
      var showView = new Trello.Views.BoardShow({
        model: board
      });

      that._swapView(showView);
    });
  },

  _getBoard : function (id, callback) {
      var board = Trello.boards.get(id);
      if (!board){
        board = new Trello.Models.Board( {id: id} );
        board.collection = Trello.boards;
        board.fetch({
          success: function () {
            Trello.boards.add(board);
            callback(board);
          }
        });
      } else{
        callback(board);
      }
  },

  _swapView: function (view) {
    this._currentView && this_currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }


});
