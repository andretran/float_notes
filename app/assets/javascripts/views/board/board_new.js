Trello.Views.BoardNew = Backbone.View.extend({
  template : JST['board/new'],

  events: {
    'submit form' : 'submit'
  },

  render : function () {
    var renderedContent = this.template({ board : this.model });
    this.$el.html(renderedContent);
    return this;
  },

  submit : function(event){
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['board'];
    var newBoard = new Trello.Models.Board();
    newBoard.save(params, {
      success: function () {
        Trello.boards.add(newBoard);
        view.render();
      }
    });
  }
});
