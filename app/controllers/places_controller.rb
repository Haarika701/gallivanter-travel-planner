class PlacesController < ApplicationController

    def index
        places_rel = Place.all 
        places = places_rel.to_a
        @places_render = places[0].top_places()
        placeid_list, favnum = @places_render.transpose
        fav_places = []
        placeid_list.each {|placeid|
        places.delete_if do |place|
            if place.id == placeid 
                fav_places.push(place)
                true
            end 
        end
        }
        fav_places.push(*places)
        render json: fav_places
    end

    def show 
        places = Place.find(params[:id])
        render json:places.things_to_do,status: :ok
    end
end
