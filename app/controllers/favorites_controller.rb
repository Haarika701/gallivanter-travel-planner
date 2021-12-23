class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create 
        
        favorite = Favorite.create!(favorite_params)
        render json: favorite,status: :created
    end



    private 

    def favorite_params
        params.permit(:user_id,:things_to_do_id)
    end

    def record_invalid()
        render json: { errors: ["record invalid"]}, status: :unprocessable_entity
    end
end
