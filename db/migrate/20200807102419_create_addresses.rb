class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.integer :zipcode,     null: false
      t.integer :prefecture_code,     null: false
      t.string :city,     null: false
      t.string :district,     null: false
      t.string :building
      t.string :room
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end



