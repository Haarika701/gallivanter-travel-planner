class ThingsToDosController < ApplicationController

    def index
        thingstodo = ThingsToDo.all 
        render json
    end
end
