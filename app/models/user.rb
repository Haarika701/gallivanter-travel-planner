class User < ApplicationRecord
    has_secure_password

    has_many :favorites 
    has_many :thing_to_dos,through: :favorites

    has_many :trip_planners

    # validates  :username, :email, :password, :password_confirmation, presence: true
    # validates :username, :email, uniqueness: true
    # validates :password, length: { minimum: 8 }
end
