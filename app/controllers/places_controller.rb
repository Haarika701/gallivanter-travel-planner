class PlacesController < ApplicationController

    def index
        places = Place.all 
        render json: places
    end

    def show 
        places = Place.find(params[:id])
        render json:places.things_to_dos,status: :ok
    end
end
