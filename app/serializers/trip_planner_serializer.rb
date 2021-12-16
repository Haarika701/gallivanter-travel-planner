class TripPlannerSerializer < ActiveModel::Serializer
  attributes :id, :plan_name, :destination, :hotel_name, :hotel_address, :hotel_checkin, :hotel_checkout, :flight_name, :flight_number, :flight_to, :flight_from, :trip_activities, :trip_start, :trip_end, :notes
  has_one :user
end
