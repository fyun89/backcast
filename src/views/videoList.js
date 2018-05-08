var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this)
    //map
    this.render
  },

  render: function() {
    //debugger;
    this.$el.children().detach();
    this.$el.html(this.template()); 
    this.collection.forEach(function(video) {
      var vv = new VideoListEntryView({model: video});
      $('.list').append(vv.render())
    })
    
    
    return this;
  },


  
  template: templateURL('src/templates/videoList.html')

});

