class AddCardsAssociationToLanguage < ActiveRecord::Migration[6.0]
  def change
    add_reference :cards, :language
  end
end
