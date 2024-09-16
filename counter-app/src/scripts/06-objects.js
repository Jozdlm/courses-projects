export const usContext = ({ key, name, age }) => {
  const generatedUsername = `${key}.${name}-${age}`;

  return {
    username: generatedUsername,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
