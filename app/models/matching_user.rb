class MatchingUser < ApplicationRecord
  belongs_to :group, optional: true
  # belongs_to :user, optional: true

  # belongs_to :to_user, class_name: "user", foreign_key: "to_user_id", optional: true
  # belongs_to :from_user, class_name: "user", foreign_key: "from_user_id", optional: true
  

  belongs_to :to_user, class_name: 'User', foreign_key: 'to_user_id', optional: true
  belongs_to :from_user, class_name: 'User', foreign_key: 'from_user_id', optional: true
  # belongs_to :following, class_name: "User"
  # belongs_to :follower, class_name: "User"
end
