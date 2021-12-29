class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    # before_action :authenticate_user!
    # before_action :set_user

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end

      def show
        user = current_user
        if user
            render json: user, status: :ok
        else
            render json: {errors: ["Login to continue"]}, status: :unauthorized
        end
    end

    def update
      user = User.find_by_id(session[:user_id])
      user.update!(edit_user)
      render json: user,status: :ok
    end

    def destroy
      user = User.find_by_id(session[:user_id])
      user.destroy
      render json:{}
    end

      private 
      def user_params
        params.permit(:first_name, :last_name, :city, :image, :username, :email, :password, :password_confirmation)
    end
  

    def edit_user
      params.permit(:username,:city,:image)
    end


end
