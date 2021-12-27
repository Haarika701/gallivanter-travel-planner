class TripsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        trips = Trip.all 
        render json:trips,status: :ok
    end
    def create
        trip = Trip.create!(trip_params)
        render json:trip,status: :created
    end

    # def show
    #     trip_planner = User.find(session[:user_id])
    #     tripsthing = trip_planner.user
    #     render json:tripsthing,status: :ok
    # end

    private

    def trip_params
        params.permit(:trip_planner_id)
    end

end
