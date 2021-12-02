class AnimalsController < ApplicationController
    def index
        animals = Animal.all
        render json: animals
    end
    def create
        animal = Animal.create(animal_params)
        if animal.valid?
          render json: animal
        else
          render json: animal.errors, status: 422
        end
      end
      def destroy
        animal = Animal.find(params[:id])
        if animal.destroy
          render json: animal
        else
          render json: animal.errors, status: 422
        end
      end
    
      private
      def animal_params
        params.require(:animal).permit(:name, :species, :breed, :age, :gender, :description, :spayed_neutered, :declawed, :size, :photo, :contact_info, :contact_location)
      end

end
