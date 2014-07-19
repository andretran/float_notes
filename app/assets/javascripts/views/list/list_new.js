Trello.Views.ListNew = Backbone.View.extend({
  template : JST['list/new'],

  events: {
    'submit form' : 'submit'
  },

  render : function () {
    var renderedContent =  this.template({ list : this.model });
    this.$el.html(renderedContent);
    return this;
  }

  // submit: function(event){
  //   var view = this;
  //   event.preventDefault();
  //   var params = $(event.currentTarget).serializeJSON()['list'];
  //   var newList = new Trello.Models.List();
  //   newBoard.save(params, {
  //     success: function () {
  //       Trello.boards.add(newList);
  //       view.render();
  //     }
  //   });
  // }
});
