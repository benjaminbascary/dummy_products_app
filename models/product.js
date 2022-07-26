const fs = require('fs');
const path = require('path');
const myPath = path.join(path.dirname(require.main.filename), 'db', 'products.json');
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  saveProduct() {
    // we pass root directory name, name of the folder, and name of the file
    
    fs.readFile(myPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(myPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
  }

  //static hace que pueda llamar al metodo de la clase sin tener que instanciar un objecto con 'new'
  static getProducts(callback) {
    fs.readFile(myPath, (err, fileContent) => {
      if (err) {
        return callback([]);
      }

      return callback(JSON.parse(fileContent));
    })
    
  }

}

module.exports = Product;