class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :group, foreign_key: true
      t.integer :participant_id
      t.integer :drawn_id

      t.timestamps
    end
  end
end
