var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, true]; // tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 5] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; // 5
var havale = Payment.havale; // 1
var eft = Payment.eft; //3