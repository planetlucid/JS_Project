class CardSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :title
end

# Serializer is definition here...