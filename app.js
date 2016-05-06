var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.view = {};
  $scope.view.searchKeyword = '';
  $scope.view.addingPost = false;
  $scope.view.newPost = {};
  $scope.view.addPost = function() {
    $scope.view.newPost.date = moment().calendar();
    $scope.view.newPost.comments = [];
    $scope.view.newPost.votes = 0;
    $scope.view.posts.unshift($scope.view.newPost);
    $scope.view.newPost = {};
    $scope.view.addingPost = false;
  };
  $scope.view.viewingComments = false;
  $scope.view.addingComment = false;
  $scope.view.newComment = {};
  $scope.view.addComment = function(postTitle) {
    var posts = $scope.view.posts;

    for (i = 0; i < posts.length; i++) {
      if (posts[i].title == postTitle) {
        post[i].comments.unshift($scope.view.newComment)
      }
    }
    $scope.view.newComment = {};
    $scope.view.addingComment = false;
  }
  $scope.view.posts = [
    {
      title: 'Syriana',
      author: 'George Clooney',
      image: 'http://movieposters.2038.net/p/Syriana_1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: moment().subtract(2, 'days').subtract(5, 'hours').calendar(),
      comments: [
        {author: 'John', comment: 'Cool'},
        {author: 'George', comment: 'Great movie'},
        {author: 'Jane', comment: 'It was okay'}
      ],
      votes: 2
    },
    {
      title: 'Bourne Identity',
      author: 'Matt Damon',
      image: 'http://ecx.images-amazon.com/images/I/51HFMGJXMTL.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: moment().subtract(4, 'days').subtract(1, 'hours').calendar(),
      comments: [{author: 'Jim', comment: 'Classic'}],
      votes: -1
    },
    {
      title: 'Anchorman',
      author: 'Will Ferrell',
      image: 'http://ecx.images-amazon.com/images/I/51DQR900C0L._SY445_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: moment().subtract(1, 'days').subtract(2, 'hours').calendar(),
      comments: [{author: 'Kate', comment: 'Very funny'}, {author: 'Jenny', comment: 'Excellent Acting'}],
      votes: 5
    }
  ];
});
