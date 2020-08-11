class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :description, null: false
      t.text :image, null: false
      t.timestamps
    end
  end
end
