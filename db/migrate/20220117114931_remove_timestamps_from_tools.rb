class RemoveTimestampsFromTools < ActiveRecord::Migration[6.0]
  def change
    remove_timestamps :tools
  end
end
