# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tool.create(tooltype: 'Shell mill', diameter: 100, length: 110, corner_radius: 0.8, flute_number: 5, flute_length: 25, machine: 'Kekeisen', number: 146)
Tool.create(tooltype: 'End mill', diameter: 50, length: 175, corner_radius: 0.8, flute_number: 3, flute_length: 32, machine: 'Kekeisen', number: 122)
Tool.create(tooltype: 'Insert drill', diameter: 40, length: 225, corner_radius: 0.4, flute_number: 2, flute_length: 10, machine: 'Kekeisen', number: 110)