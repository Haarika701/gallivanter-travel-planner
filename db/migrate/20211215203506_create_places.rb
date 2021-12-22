class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :city
      t.string :state
      t.string :country
      t.string :image
      t.timestamps
    end
  end
end
