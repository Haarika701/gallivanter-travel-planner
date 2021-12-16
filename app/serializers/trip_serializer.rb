class TripSerializer < ActiveModel::Serializer
  attributes :id
  has_one :trip_planner
  has_one :things_to_do
end
