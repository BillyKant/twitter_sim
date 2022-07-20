const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType } = require('./types')
const { User, Post } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in database',
    resolve(parent, args){
        return User.find()
    }
}

const posts = {
    type: new GraphQLList(UserType),
    description: 'Query all users in database',
    resolve(parent, args){
        return Post.find()
    }
}