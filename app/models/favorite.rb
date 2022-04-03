class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :things_to_do
end

validates :things_to_do_id, uniqueness: { scope: :user_id, :message => "has already been added as favorite" }

def group_by_favorite
Favorite.group(:things_to_do_id).count
end

