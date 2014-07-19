Trello.Views.BoardIndexRow = Backbone.View.extend({
  template: JST['board/index_row'],
  render: function () {
    var renderedContent = this.template({ board : this.model });
    this.$el.html(renderedContent);
    return this;
  }

});


Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['board/index'],

  initialize: function () {
    this.listenTo(Trello.boards, 'sync', this.render);
    this.listenTo(Trello.boards, 'add', this.addBoard);
  },

  addBoard: function(board) {
    var rowView = new Trello.Views.BoardIndexRow({ model : board });
    this.addSubview('#boards', rowView);
  },

  render : function () {
    var that = this;
    var renderedContent = that.template();
    that.$el.html(renderedContent);

    that.collection.each(function (board) {
      that.addBoard(board);
    });
    var board = new Trello.Models.Board();
    that.addSubview('#board-new', new Trello.Views.BoardNew({ model : board }));

    return that;
  }


});
