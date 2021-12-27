class TripPlanner < ApplicationRecord
  has_many :trips
  belongs_to :user

  validates :plan_name,:destination,:hotel_name,:trip_activities,presence: true

end
