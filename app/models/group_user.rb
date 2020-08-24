class GroupUser < ApplicationRecord
  belongs_to :group, optional: true
  belongs_to :participant,  class_name: "User", optional: true
  belongs_to :drawn, class_name: "User", optional: true
end
