Trello.Views.ListShow = Backbone.CompositeView.extend({
  template : JST['list/show'],
  className: 'list-wrapper-item',

  id: function () {
    return this.model.id;
  },

  events: {
    'click .add-card-btn' : 'showForm'
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
  },

  addCard : function (card) {
    var cardShow = new Trello.Views.CardShow({ model: card });
    this.addSubview('.card-wrapper', cardShow);
  },

  render : function () {
    var renderedContent = this.template({ list : this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.cards().each( function (card) {
      that.addCard(card);
    });

    this.$el.find('#card-form-' + this.model.id).html('<div class="add-card-btn"> Add a card... </div>');
    return this;
  },

  showForm: function () {
    var newCardView = new Trello.Views.CardNew( {model : this.model });
    this.$el.find('#card-form-' + this.model.id).html(newCardView.render().$el);
  }
});
