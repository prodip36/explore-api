const user = {
    id:1, name:'Momen',job:'Web developer'
};
console.log(user);

//JavaScript Object Notation(JSON)
const stringified=JSON.stringify(user);
console.log(stringified);

const shop={
    owner:'Momen',
    address:{
        street:'17A',
        city:'Dhaka',
        country:'Bangladesh'
    },
    products: ['laptop','light','mobile','tv'],
    revenue:50000,
    isOpen:true,
    isNew:false

}
console.log(shop);

const shopJson=JSON.stringify(shop);
console.log(shopJson);

const parseShop=JSON.parse(shopJson);
console.log(parseShop);