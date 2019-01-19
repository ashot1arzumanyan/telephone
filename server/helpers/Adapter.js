function Adapter() {
  this.clients = [];
  this.names = [];
  this.ids = [];
  this.rooms = [];
}

Adapter.prototype.randomName = function() {
  const getRandomName = () => {
    const unnamed = 'Unnamed';
    const randomFourDigit = Math.ceil(Math.random() * 10);
    const name = unnamed + randomFourDigit;
    if (this.names.indexOf(name) > -1) {
      return getRandomName();
    } else {
      return name;
    }
  }
  return getRandomName();
}

Adapter.prototype.addValues = function(client, name, id) {
  Promise.all([
    client.name = name,
    client.id = id,
    this.addValueToArray(client, this.clients),
    this.addValueToArray(name, this.names),
    this.addValueToArray(id, this.ids)
  ])
}

Adapter.prototype.deleteValues = function(index) {
  Promise.all([
    this.deleteValueFromArray(index, this.clients),
    this.deleteValueFromArray(index, this.names),
    this.deleteValueFromArray(index, this.ids)
  ])
}

Adapter.prototype.addValueToArray = function(value, array) {
  array.push(value); 
  return;
}

Adapter.prototype.deleteValueFromArray = async function(index, array) {
  array.splice(index, 1);
  return;
}

Adapter.prototype.getId = function(req) {
  return req.connection.remoteAddress + '_' + req.connection.remotePort;
}

module.exports = Adapter