class Product 
{
    constructor(_name, _price) 
    {
        this.name = _name;
        this.price = _price;
    }
    get Name() 
    {
        return this.name;
    }
    get Price() 
    {
        return this.price;
    }
}
class Basket 
{
    constructor() 
    {
        this.products = [];
    }

    addProduct(amount, product) 
    {
        //this.products.push(...Array(amount).fill(product));
        console.log(this.products.push(...Array(amount).fill(product)));
    }
    get calculateTotal() 
    {
        return this.products.map(function (product) 
        {
            return product.Price
        })
            .reduce(function (a,b)
            {
                return a + b;
            }, 0);
    }
    get printShoppingInfo() 
    {
        let total = this.calculateTotal;
        console.log('One has to pay in total: ' + total);
    }
}
const Shoes = new Product('Shoes',5000);
const Joggers = new Product('Joggers',4000);
const Chappals = new Product('Chappals',2500);
const basket = new Basket();
basket.addProduct(3,Shoes);
basket.addProduct(2,Joggers);
basket.addProduct(5,Chappals);

basket.printShoppingInfo;
