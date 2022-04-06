class Place < ApplicationRecord
    has_many :things_to_dos

    def top_places
        @places_render = Favorite.joins(:things_to_do,:user).group(:place_id).count.sort
       end
end