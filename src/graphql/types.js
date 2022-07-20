// Import built in GraphQL data types
const { GraphQLObjectType, GraphQLInputObjectType, 
	GraphQLID, GraphQLString, GraphQLList, GraphQLInt, 
	GraphQLBoolean, GraphQLFloat } = require('graphql')

// Import our models so that we can interact with the DB
const {User, Post } = require('../models')   

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        quizzes: {
            type: new GraphQLList(QuizType),
            resolve(parent, args) {
                return Quiz.find({ userId: parent.id })
            }
        },
        submissions: {
            type: new GraphQLList(SubmissionType),
            resolve(parent, args) {
                return Submission.find({ userId: parent.id })
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        userID: { type: GraphQLString },
        content: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
    })
})

module.exports = {
    UserType,
    PostType
}