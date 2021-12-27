# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_15_203740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "things_to_do_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["things_to_do_id"], name: "index_favorites_on_things_to_do_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "places", force: :cascade do |t|
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "things_to_dos", force: :cascade do |t|
    t.bigint "place_id", null: false
    t.string "description"
    t.string "category"
    t.string "expense"
    t.float "rating"
    t.string "image"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["place_id"], name: "index_things_to_dos_on_place_id"
  end

  create_table "trip_planners", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "plan_name"
    t.string "destination"
    t.string "hotel_name"
    t.string "hotel_address"
    t.date "hotel_checkin"
    t.date "hotel_checkout"
    t.string "flight_name"
    t.integer "flight_number"
    t.string "flight_to"
    t.string "flight_from"
    t.string "trip_activities"
    t.date "trip_start"
    t.date "trip_end"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_trip_planners_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "trip_planner_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_planner_id"], name: "index_trips_on_trip_planner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "city"
    t.string "image"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "favorites", "things_to_dos"
  add_foreign_key "favorites", "users"
  add_foreign_key "things_to_dos", "places"
  add_foreign_key "trip_planners", "users"
  add_foreign_key "trips", "trip_planners"
end
