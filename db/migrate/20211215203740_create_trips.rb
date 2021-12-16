class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.belongs_to :trip_planner, null: false, foreign_key: true
      t.belongs_to :things_to_do, null: false, foreign_key: true

      t.timestamps
    end
  end
end
