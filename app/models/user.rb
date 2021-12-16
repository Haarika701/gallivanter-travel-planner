class User < ApplicationRecord
    has_many :favorites 
    has_many :thing_to_dos,through: :favorites
    has_many :trip_planners
end
