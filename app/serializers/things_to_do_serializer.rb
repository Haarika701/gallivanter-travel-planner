class ThingsToDoSerializer < ActiveModel::Serializer
  attributes :id, :description, :reviews, :category, :expense, :rating, :image
  has_one :place
end
