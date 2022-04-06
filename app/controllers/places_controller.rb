class PlacesController < ApplicationController

    def index
        places = Place.all 
        #place = Place.first
        @places_render = places[0].top_places()
        render json: places
    end

    def show 
        places = Place.find(params[:id])
        render json:places.things_to_do,status: :ok
    end
end
