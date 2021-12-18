class TripPlannersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
#  before_action :current_user, only: [:create]

    def index
        tripplanners = TripPlanner.all 
        render json: tripplanners,status: :ok
    end

    def create 
        # user = @current_user
        tripplanner = TripPlanner.create!(planner_params)
        render json: tripplanner,status: :created,each_serializer:TripPlannerShowSerializer

    end

    private 

    def planner_params
        params.permit(:user_id,:plan_name,:destination,:hotel_name,:hotel_address,:hotel_checkin,:hotel_checkout,:flight_name,:flight_number,:flight_to,:flight_from,:trip_activities,:trip_start,:trip_end,:notes)
    end

    def record_invalid()
        render json: { errors: ["Fill the mandatory fields"]}, status: :unprocessable_entity
    end
end
