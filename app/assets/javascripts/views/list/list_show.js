Trello.Views.ListShow = Backbone.CompositeView.extend({
  template : JST['list/show'],

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
  },

  addCard : function (card) {
    var cardShow = new Trello.Views.CardShow({ model: card });
    this.addSubview('#cards', cardShow);
  },

  render : function () {
    var renderedContent = this.template({ list : this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.cards().each( function (card) {
      that.addCard(card);
    });

    var newCardView = new Trello.Views.CardNew( {model : this.model });
    this.addSubview('#cards-form', newCardView);
    return this;
  }
});
