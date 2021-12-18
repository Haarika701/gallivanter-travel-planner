class TripPlanner < ApplicationRecord
  has_many :trips
  has_many :things_to_dos,through: :trips
 belongs_to :user

 validates :plan_name,:destination,:hotel_name,:trip_activities,presence: true

end


# t.string "plan_name"
# t.string "destination"
# t.string "hotel_name"
# t.string "hotel_address"
# t.date "hotel_checkin"
# t.date "hotel_checkout"
# t.string "flight_name"
# t.integer "flight_number"
# t.string "flight_to"
# t.string "flight_from"
# t.string "trip_activities"
# t.date "trip_start"
# t.date "trip_end"
# t.string "notes"