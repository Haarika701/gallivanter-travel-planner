class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :city, :image, :username, :email, :password
end
