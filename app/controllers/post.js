import Controller from '@ember/controller';

export default Controller.extend({
  title: 'My Blog Post',
  body: 'This is the body of my blog',
  authors: ['William', 'Robert', 'Michelle'],
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
