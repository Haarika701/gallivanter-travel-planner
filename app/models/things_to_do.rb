class ThingsToDo < ApplicationRecord
    has_many :favorites 
    has_many :users,through: :favorites
    belongs_to :place
end
