var AppView = Backbone.View.extend({

  el: '#app',

  // events: {
  //   'click' : 'event_handler'
  // },
  
  // event_handler: function(e) {
    
  // },

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },
  

  render: function() {
    this.$el.html(this.template());
    
    new VideoListView({
      el: '.list',
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: '.player',
      model: this.videos.at(4),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: '.search'
    }).render();
    
    return this;
  },
  

  template: templateURL('src/templates/app.html')

});