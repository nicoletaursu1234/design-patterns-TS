var Db = /** @class */ (function () {
    function Db(name) {
        this.name = name;
    }
    Db.getInstance = function () {
        if (!this.instance) {
            this.instance = new Db("First instance");
        }
        return this.instance;
    };
    return Db;
}());
export default (function () {
    var inst1 = Db.getInstance();
    var inst2 = Db.getInstance();
    // const newInst = new Db('Second instance'); Will not work
    console.log("Instance 1: " + inst1.name + ", Instance 2: " + inst2.name);
    console.log(inst1 === inst2);
});
//# sourceMappingURL=singleton.js.map