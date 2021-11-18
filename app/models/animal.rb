class Animal < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
end




# has_many :users
# has_many :favorites, through: :users