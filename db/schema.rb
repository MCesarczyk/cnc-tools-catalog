# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_17_122729) do

  create_table "tools", force: :cascade do |t|
    t.string "tooltype"
    t.integer "diameter"
    t.integer "length"
    t.integer "corner_radius"
    t.integer "flute_number"
    t.integer "flute_length"
    t.string "machine"
    t.integer "number"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

end
