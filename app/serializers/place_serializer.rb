class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :country
end
