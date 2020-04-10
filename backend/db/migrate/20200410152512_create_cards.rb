class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :question
      t.string :answer
        
      t.timestamps
    end
  end
end
