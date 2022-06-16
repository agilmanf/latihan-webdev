const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const suppliers = [
  {
    id: 1,
    name: "PT. Teknologi Bersama",
    address: "Bandung",
    productId: 2,
  },
  {
    id: 2,
    name: "Insider Studio",
    address: "Jakarta",
    productId: 1,
  },
];

const products = [
  {
    id: 1,
    name: "Meja Makan",
    price: 125000,
  },
  {
    id: 2,
    name: "Lemari Besi",
    price: 250000,
  },
];

const SupplierType = new GraphQLObjectType({
  name: "Supplier",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    products: { type: GraphQLID },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    suppliers: {
      type: new GraphQLList(SupplierType),
      resolve(parent, args) {
        return suppliers;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
