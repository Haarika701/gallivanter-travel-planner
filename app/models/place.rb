class Place < ApplicationRecord
    has_many :things_to_dos
end

def render_place
  group_by_favorite.sort_by(&:self.city)
end