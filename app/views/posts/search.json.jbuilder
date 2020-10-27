json.array! @posts do |post|
  json.id post.id
  json.caption post.caption
  json.image post.image
  json.user_id post.user_id
  json.nickname post.user.nickname
  json.picture post.user.image
  json.tag_list post.tag_list
  json.user_sign_in current_user
end


