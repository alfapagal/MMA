var result = [];
var Fighter = function(name, wtClass){
    this.name = name;
    this.class = wtClass;
};
result.push(new Fighter('Ronda Rousey', 2));
result.push(new Fighter('Holly Holm', 2));
result.push(new Fighter('Miesha Tate', 2));
result.push(new Fighter('Connor McGregor', 3));
result.push(new Fighter('Chad Mendes', 3));
result.push(new Fighter('Jose Aldos', 3));
result.push(new Fighter('Rafael Dos Anjos', 4));
result.push(new Fighter('Nate Diaz', 4));
result.push(new Fighter('Anderson Silva', 6));
result.push(new Fighter('Nick Diaz', 6));
result.push(new Fighter('Jon Jones', 7));
module.exports= result;