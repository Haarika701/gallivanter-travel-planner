class ThingsToDosController < ApplicationController

    def index
        thingstodo = ThingsToDo.all 
        render json: thingstodo,status: :ok
    end

    def show
        things_to_do = ThingsToDo.find(params[:id])
        render json: things_to_do.place,status: :ok
    end
end
