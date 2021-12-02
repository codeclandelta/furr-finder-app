class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        # byebug
        animal = Animal.find(params[:id])
        if animal.present?
            current_user.animals << animal
          render json: animal
        else
          render json: animal.errors, status: 422
        end
    end

    def index
        favorites = Favorite.all
        render json: favorites
    end


      def update
       favorite= Favorite.find(params[:id])
        favorite.update(favorite_params)
        if favorite.valid?
          render json: favorite
        else
          render json: favorite.errors, status: 422
        end
      end
    
      def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: favorite
      end

      private
      def favorite_params
       params.require(:favorite).permit(:animal_id, :user_id, :priority_sort)
      end

end