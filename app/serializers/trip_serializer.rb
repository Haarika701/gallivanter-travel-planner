class TripSerializer < ActiveModel::Serializer
  attributes :id
  has_one :trip_planner

end
