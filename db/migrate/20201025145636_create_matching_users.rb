class CreateMatchingUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :matching_users do |t|
      t.references :group, index: true, foreign_key: true, null: false
      t.references :from_user, foreign_key: { to_table: :users }, null: false
      t.references :to_user, foreign_key: { to_table: :users }, null: false

      t.timestamps
    end
  end
end
