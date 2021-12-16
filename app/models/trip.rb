class Trip < ApplicationRecord
  belongs_to :trip_planner
  belongs_to :things_to_do
end
