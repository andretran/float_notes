Trello.Routers.Boards = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl;
  },



  routes: {
    '' : 'firstBoard',
    'boards/:id' : 'show'
  },

  firstBoard : function () {
    this.show(1);
  },

  index : function () {
    var that = this;

    Trello.boards.fetch({
      success: function () {
        var indexView = new Trello.Views.BoardIndex({
          collection : Trello.boards
        });

        that._swapView(indexView);
      }
    });
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
      var board = Trello.boards.getOrFetch(id);
      if (!board){
        board = new Trello.Models.Board({ id: id });
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
    // debugger;
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }


});
