class Grocery < ActiveRecord::Base
  validates :name, uniqueness: true
end
