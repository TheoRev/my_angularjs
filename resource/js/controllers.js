angular.module("FinalApp")
.controller("MainController", function($scope, $resource){
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
  User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
  $scope.posts = Post.query();
  $scope.users = User.query();
  $scope.removePost = function(post){
    Post.delete({id: post.id}, function(data){
      console.log(data);
    });
    $scope.posts = $scope.posts.filter(function(element){
      return element.id !== post.id;
    });
  }
})
.controller("PostController", function($scope, $resource, $routeParams){
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
  $scope.post = Post.get({id: $routeParams.id})
})
.controller("NewPostController", function($scope, $resource){
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
  $scope.post = {};
  $scope.title = "Crear post";
  $scope.savePost = function(){
    Post.save({data: $scope.post}, function(data) {
      console.log(data);
    });
  }
});
