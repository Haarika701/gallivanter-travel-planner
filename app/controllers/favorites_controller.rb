class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        favorites = Favorite.all
        render josn:favorites,status: :ok
    end

    def create 
        favorite = Favorite.create!(favorite_params)
        render json: favorite,status: :created
    end

    def show
        user = User.find_by_id(session[:user_id])
        favoritethings = user.favorites
        render json: favoritethings, status: :ok
    end

    private 

    def favorite_params
        params.permit(:user_id,:things_to_do_id)
    end

    def record_invalid()
        render json: { errors: ["record invalid"]}, status: :unprocessable_entity
    end
end
