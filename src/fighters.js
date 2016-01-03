var result = [];
var Fighter = function(name, wtClass){
    this.name = name;
    this.class = wtClass;
};
result.push(new Fighter('Connor McGregor', 3));
result.push(new Fighter('Anderson Silva', 6));
result.push(new Fighter('Jon Jones', 7));
module.exports= result;