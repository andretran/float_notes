Trello.Views.CardNew = Backbone.View.extend({
  template: JST['card/new'],

  events: {
    'submit form' : 'submit'
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.$el.find('#titlefield').focus(); 
    return this;
  },

  submit: function(event){
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['card'];
    var newCard = new Trello.Models.Card({ list_id : this.model.id });
    newCard.save(params, {
      success: function () {
        view.model.cards().add(newCard);
        view.render();
      }
    });

  }
});
