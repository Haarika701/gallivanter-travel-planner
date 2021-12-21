class ThingsToDoSerializer < ActiveModel::Serializer
  attributes :id, :description,  :category, :expense, :rating, :image,:name
  has_one :place
end
