class AddTimestampsToTools < ActiveRecord::Migration[6.0]
  def change
    add_timestamps :tools, null: true
  end
end
