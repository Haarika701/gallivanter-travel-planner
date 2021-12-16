class CreateTripPlanners < ActiveRecord::Migration[6.1]
  def change
    create_table :trip_planners do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :plan_name
      t.string :destination
      t.string :hotel_name
      t.string :hotel_address
      t.date :hotel_checkin
      t.date :hotel_checkout
      t.string :flight_name
      t.integer :flight_number
      t.string :flight_to
      t.string :flight_from
      t.string :trip_activities
      t.date :trip_start
      t.date :trip_end
      t.string :notes

      t.timestamps
    end
  end
end
