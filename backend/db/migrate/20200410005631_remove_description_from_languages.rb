class RemoveDescriptionFromLanguages < ActiveRecord::Migration[6.0]
  def change

    remove_column :languages, :description, :text
  end
end
