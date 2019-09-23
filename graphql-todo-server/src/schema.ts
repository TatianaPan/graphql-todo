import 'graphql-import-node';
import * as typeDefs from './schema.graphql';
import {makeExecutableSchema} from 'graphql-tools';
import {GraphQLSchema} from 'graphql';
import {IResolvers} from 'graphql-tools';

export const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});
