const parseAddress = addressData => {
  const address = addressData.address_components.reduce(
    (address, component) => {
      if (component.types.includes("administrative_area_level_1")) {
        return { ...address, state: component.short_name };
      } else if (component.types.includes("administrative_area_level_2")) {
        return { ...address, city: component.long_name };
      } else if (component.types.includes("sublocality_level_1")) {
        return { ...address, district: component.long_name };
      } else if (component.types.includes("route")) {
        return { ...address, street: component.long_name };
      } else if (component.types.includes("street_number")) {
        return { ...address, number: component.short_name };
      } else if (component.types.includes("postal_code")) {
        return { ...address, zipCode: component.short_name };
      }

      return address;
    },
    {}
  );

  return {
    ...address,
    lat: addressData.geometry.location.lat,
    lng: addressData.geometry.location.lng
  };
};

const parseGasStations = gasStationData => {
  return gasStationData
    .filter(gasStation => {
      return gasStation.opening_hours && gasStation.opening_hours.open_now;
    })
    .map(gasStation => {
      return {
        lat: gasStation.geometry.location.lat,
        lng: gasStation.geometry.location.lng,
        name: gasStation.name,
        address: gasStation.vicinity
      };
    });
};

module.exports = { parseAddress, parseGasStations };
