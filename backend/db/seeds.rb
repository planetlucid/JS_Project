# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Created model for card with the following:
## title:string 
## question:string 
## answer:string 
## language:string

languages = Language.create ([{ name: 'JavaScript' }, { name: 'Ruby' }, { name: 'CSS' }, { name: 'HTML' }, { name: 'React' } ])
Card.create(title: 'Quick title of answer 1', question: 'what is an integer', answer: 'a number', language: 'Ruby')
