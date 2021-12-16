class TripPlanner < ApplicationRecord
  has_many :trips
  has_many :things_to_dos,through: :trips
 belongs_to :user
end
