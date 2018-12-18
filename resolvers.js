const axios = require("axios");

const { parseAddress, parseGasStations } = require("./mapUtils");

const resolvers = {
  Query: {
    gasStations: (_, { lat, lng }) => {
      return { lat, lng };
    }
  },
  GasStationsData: {
    location: ({ lat, lng }) => {
      return axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`
        )
        .then(res => {
          return parseAddress(res.data.results[0]);
        });
    },
    gasStations: ({ lat, lng }) => {
      return axios
        .get(
          `https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${lng}&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`
        )
        .then(res => parseGasStations(res.data.results));
    }
  }
};

module.exports = resolvers;
