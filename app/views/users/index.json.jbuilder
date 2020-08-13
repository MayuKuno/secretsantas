json.array! @users do |user|
  json.id user.id
  json.nickname user.nickname
end