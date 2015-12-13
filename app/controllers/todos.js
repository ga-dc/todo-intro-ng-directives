var app = angular.module("todo");
app.controller("todosController", function(){
  this.todos = [
    "Walk the Dog",
    "Buy Groceries",
    "Eat foot",
    "Smell fish"
  ];
  this.formIsVisible = false;
  this.toggleForm = function(){
    console.log("toggleform");
    if(this.formIsVisible){
      this.formIsVisible = false;
    }
    else{
      this.formIsVisible = true;
    }
  };
  this.create = function(){
    this.todos.unshift(this.content);
    console.log(this.todos);
  };
  this.edit = function(index){
    var todo = this.todos[index];
    this.content = todo;
  };
  this.update = function(index){
    this.todos[index] = this.content;
  };
  this.delete = function(index){
    this.todos.splice(index, 1);
  }
});
