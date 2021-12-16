class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :things_to_do
end
