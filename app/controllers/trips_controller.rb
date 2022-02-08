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

    private

    def trip_params
        params.permit(:trip_planner_id)
    end

end
