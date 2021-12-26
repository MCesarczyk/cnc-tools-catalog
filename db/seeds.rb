# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tool.create(tooltype: 'Shell mill', diameter: 125, length: 110, quantity: 4)
Tool.create(tooltype: 'End mill', diameter: 20, length: 175, quantity: 12)
Tool.create(tooltype: 'Insert drill', diameter: 65, length: 225, quantity: 10)