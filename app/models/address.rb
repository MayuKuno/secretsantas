class Address < ApplicationRecord
  belongs_to :user, optional: true
  validates :zipcode, :prefecture_code, :city,:district,presence: true
end

