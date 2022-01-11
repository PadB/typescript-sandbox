function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

type numVals = 1 | 2 | 3 | 4;

function getRandomValue(): numVals {
    return Math.floor(Math.random() * 4) + 1 as numVals;
}

type cities = "London" | "Paris" | "Chicago";
type cityResponse = `City: ${ cities }`;

function getCityString(city: cities): cityResponse {
    return `City: ${city}` as cityResponse;
}

let str = getCityString("London");
console.log(str);

console.log(3/2);
console.log(Math.floor(3/2));

type Person = {
    id: string,
    name: string, 
    city: string
};

type Employee = {
    id: string,
    company: string,
    dept: string
    getContact(field: number): number
};

type EmployedPerson = Person & Employee;

let person: EmployedPerson = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales", 
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512346543;
    }  
};

let typeTest = person.getContact;
let numberParamTypeTest = person.getContact(123);

console.log(`Contact: ${person.getContact(12)}`);

let data: Person[] = 
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
     { id: "ajones", name: "Alice Jones", city: "Paris"},
     { id: "dpeters", name: "Dora Peters", city: "New York"}];

data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`);
});

interface Product { 
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(public name: string, public category: string, 
            public price: number) {
        // no statements required
    }
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }

    [propertyName: string]: Product;
}

let group 
    = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);

total = group.hat.price + (group.boots?.price ?? 0);
console.log(`Total: ${total}`);    