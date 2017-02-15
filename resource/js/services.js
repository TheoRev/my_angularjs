angular.module("FinalApp")
  .factory("PostRessource", function($resource){
    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
  })
