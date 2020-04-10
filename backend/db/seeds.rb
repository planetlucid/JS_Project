# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Language.create([{name: "Javascript"},{name: "Ruby"},{name: "HTML"},{name: "CSS"},{name: "React"}])

Card.create([
  {
    title: "HTML", 
    question: "What is HTML?", 
    answer: "Hyper Text Markup Language (HTML) is a markup language for creating a webpage.", 
    language_id: 1
  },
  {
    title: "Fetch", 
    question: "What is Fetch?", 
    
    answer: "The Fetch API provides a JavaScript interface for accessing and 
    manipulating parts of the HTTP pipeline, such as requests and responses. 
    It also provides a global fetch() method that provides an easy, 
    logical way to fetch resources asynchronously across the network.", 
    
    language_id: 1
  },
  {
    title: "Variables", 
    question: "What are variable in JS?", 
    
    answer: "JavaScript variables are containers for storing data values.
    In this example, x, y, and z, are variables:
    var x = 5;
    var y = 6;
    var z = x + y;",
 
    language_id: 1
  }
])