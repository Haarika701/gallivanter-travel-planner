class TripsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    def create
        trip = Trip.create!(trip_params)
        render json:trip,status: :created
    end

    def show
        trip_planner = TripPlanners.find(params[:id])
        trips = trip_planners.trips
        render json:trips,status: :ok
    end

    private

    def trip_params
        params.permit(:trip_planner_id,:things_to_do_id)
    end

end
