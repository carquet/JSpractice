var cashRegister = {
    total:0,
    lastTransactionAmount: function(newCost){
        var lastAmount = newCost;
        return lastAmount;
        },
        
    add: function(itemCost) {
        this.lastTransactionAmount(itemCost);
        this.total +=  itemCost;
    },
    
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    
         
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead


//Show the total bill
console.log('Your bill is '+ cashRegister.total);