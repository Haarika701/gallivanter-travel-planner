class User < ApplicationRecord
    has_secure_password

    has_many :favorites 
    has_many :thing_to_dos,through: :favorites

    has_many :trip_planners

    validates :first_name, :username, :email, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
    validates :username,:password, presence: true 
    #validates :password, length: { minimum: 8 }
end
