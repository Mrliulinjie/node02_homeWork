var fs = require("fs");
//дһ������str = 'a/b/c/d' �����δ���a,b,c,d;
/*ͬ����������*/
//function creatDirSync(str) {
//    if (typeof str == "string") {
//        var ary = str.split("/");
//        for (var i = 0; i < ary.length; i++) {
//            var tempAry=ary.slice(0,i+1);
//            var curDir=tempAry.join("/");
//            if(!fs.existsSync(curDir)){
//                fs.mkdirSync(curDir);
//            }
//        }
//    }
//}
//creatDirSync("n/m/l/j");

/*�첽��������*/
function creatFile(str) {
    var ary = str.split('/');//['a','b','c']
    var ary1 = [];
    function make(index) {
        if (!index) {
            index = 0;
        }
        if (index >= ary.length) {
            return;
        }
        ary1.push(ary[index]);
        var str1 = ary1.join('/');
        fs.exists(str1, function (flag) {
            if (!flag) {
                fs.mkdir(str1, function () {
                    make(index + 1);
                });
            }
        });
    }
    make();
}

creatFile("n/m/l/j");
console.log(1);
console.log(2);
























