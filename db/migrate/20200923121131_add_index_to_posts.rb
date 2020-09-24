class AddIndexToPosts < ActiveRecord::Migration[5.0]
  def change
    add_index :posts, :description, length: 32

  end
end
