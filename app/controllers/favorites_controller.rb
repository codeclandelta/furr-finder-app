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

#     def index
#         #make varible containing user id
#         #make variable containing animal id
#         #select all re
#         favorites = Favorite.all
#         if favorite.present?
#           current_user.favorites << favorite
#         render json: favorite
#     end
# def update
#   favorite = Favorite.find(params[:id])
#   favorite.update(favorite_params)
# if favorite.valid?
#     render json: favorite
# else
#     render json: favorite.errors, status: 422
# end
# end
# end