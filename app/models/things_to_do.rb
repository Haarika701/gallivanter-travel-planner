class ThingsToDo < ApplicationRecord
    has_many :favorites 
    has_many :users,through: :favorites
    belongs_to :place
    has_many :trips
    has_many :trips_planners,through: :trips
end
