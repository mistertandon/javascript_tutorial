var a = 2; var b = 3;
var obj = {
    a: 1,
    b: 2,
    childObj: {
        c: 3,
        add: function () {
            console.log(this.a + ' ' + this.b + ' ' + this.c); // undefined undefined 3
            console.log(this.a + this.b + this.c); // NaN
        }
    }
}
obj.childObj.add();