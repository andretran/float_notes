Trello.Views.ListNew = Backbone.View.extend({
  template : JST['list/new'],

  events: {
    'submit form' : 'submit'
  },

  render : function () {
    var renderedContent =  this.template({ board : this.model });
    this.$el.html(renderedContent);
    return this;
  },

  submit : function(event){
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['list'];
    var newList = new Trello.Models.List({ board_id : this.model.id });
    newList.save(params, {
      success: function () {
        view.model.lists().add(newList);
        view.render();
      }
    });
  }
});
