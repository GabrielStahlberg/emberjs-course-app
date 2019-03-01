import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    sayHello: function() {
      alert('Hello');
    },

    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    },

    submitAction: function() {
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },

  title: 'My Blog Post',
  body: 'This is the body of my blog',
  authors: ['William', 'Robert', 'Michelle'],
  created: new Date(),
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'Joe Doe',
      comment: 'Nice post'
    },
    {
      name: 'Jeff Williams',
      comment: 'Good job!'
    }
  ]
});
