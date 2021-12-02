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

    # def create
    #    favorite= Favorite.create(favorite_params)
    #     if favorite.valid?
    #       render json: favorite
    #     else
    #       render json: favorite.errors, status: 422
    #     end
    #   end

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

    # def create
    #     favorites_data= params['favorite']
    #     favorites = Favorite.create(animal_id: favorites_data[:animal_id], user_id: favorites_data[:user_id])
    #     render json: favorites
    # end


# def create
#     animal = Animal.find(params[:animal_id])
#     favorite = current_user.favorites.build(animal: animal)
#      render json: favorite
#     if favorite.save
#       flash[:notice] = "Saved as favorite!"
#     else
#       flash[:alert] = "Favorite failed to save."
#     end
#     redirect_to [animal.topic, animal]
#   end
end