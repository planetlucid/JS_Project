class CardsController < ApplicationController

    def index 
        cards = Card.all 
        options = {
            include: [:cards]
        }
        render json: CardSerializer.new(cards, options)
    end 

end
