const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    gasStations: (_, { lat, lng }) => {
      return JSON.parse(`
      {
          
          "location": {
            "lat": -23.5655625,
            "lng": -46.6472389,
            "number": "1967",
            "street": "Avenida Brigadeiro Luís Antônio",
            "district": "Bela Vista",
            "city": "São Paulo",
            "state": "SP",
            "zipCode": "04002-010"
          },
          "gasStations": [
            {
              "lat": -23.5597654,
              "lng": -46.57735239999999,
              "name": "Shell (Rede Duque)",
              "address": "Avenida Salim Farah Maluf, 3400 - Vila Bertioga, São Paulo"
            },
            {
              "lat": -23.55331,
              "lng": -46.6584,
              "name": "AUTO POSTO BELA CINTRA LTDA",
              "address": "Rua Fernando de Albuquerque, 216 - Consolação, São Paulo"
            },
            {
              "lat": -23.5300399,
              "lng": -46.6778527,
              "name": "Posto Ipiranga",
              "address": "Rua Cayowaá, 45 - Perdizes, São Paulo"
            },
            {
              "lat": -23.6031717,
              "lng": -46.6258529,
              "nome": "Posto Shell",
              "address": "Avenida Doutor Ricardo Jafet, 3274 - Saúde, São Paulo"
            }
          ]
        }
      `);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});
server.start(() => console.log("Server is running on localhost:4000"));
