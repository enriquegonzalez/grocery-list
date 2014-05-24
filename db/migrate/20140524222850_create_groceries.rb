class CreateGroceries < ActiveRecord::Migration
  def change
    create_table :groceries do |t|
      t.string :name
      t.boolean :healthy

      t.timestamps
    end
  end
end
