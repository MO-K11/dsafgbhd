const reqEvent = event => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  console.log("ready eventi yüklendi")
  const reqEvent = (event) => require(`../events/${event}`);
};
