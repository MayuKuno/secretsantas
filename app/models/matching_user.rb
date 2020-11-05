class MatchingUser < ApplicationRecord
  belongs_to :group, optional: true
  # belongs_to :user, optional: true

  belongs_to :to_user, class_name: "User", optional: true
  belongs_to :from_user, class_name: "User", optional: true


end
