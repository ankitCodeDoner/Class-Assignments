// Pattern 1 - Rectangle Star ⭐
// * * * * *
// * * * * *
// * * * * *
// * * * * *
    // for (let i = 1; i <= 4; i++) {
    //     document.write("<br>");
    //     for (let j = 1; j <= 5; j++) {
    //         document.write("*");
    //     }
    // }  

// Pattern 2 - Same Number
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write("1");
    //     }
    // }
// Pattern 3 - Same Alphabet
// A A A A A
// A A A A A
// A A A A A
// A A A A A
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write("A ");
    //     }
    // }
// Pattern 4 - Column Numbers (j)
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write(j);
    //     }
    // }

// Pattern 5 - Row Numbers (i)
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write(i);
    //     }
    // }

// Pattern 6 - Triangle Star ⭐
// *
// * *
// * * *
// * * * *
// * * * * *
    // for (let i=1; i <=5; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=i;j++){
    //         document.write("*");
    //     }
    // }

// Pattern 7 - Triangle Numbers (j)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
    // for (let i=1; i <=5; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=i;j++){
    //         document.write(j);
    //     }
    // }

// Pattern 8 - Triangle Numbers (i)
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write(i);
    //     }
    // }

// Pattern 9 - Triangle Alphabet
// A
// A A
// A A A
// A A A A
// A A A A A
    // for (let i=1; i <=4; i++){
    //     document.write("<br>");
    //     for(let j= 1; j<=5;j++){
    //         document.write("A ");
    //     }
    // }
// Pattern 10 - Alphabet Sequence
// A
// A B
// A B C
// A B C D
// A B C D E


// Pattern 11 - Reverse Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

    // for (let i=1; i <=5; i++){
    //     document.write("<br>");
    //     for(let j=i; j<=5;j++){
    //         document.write("*");
    //     }
    // }
// Pattern 12 - Reverse Numbers
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
    // for (let i=5; i >=1; i--){
    //     document.write("<br>");
    //     for(let j=1; j<=i;j++){
    //         document.write(j);
    //     }
    // }

// Pattern 13 - Reverse Row Numbers
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
    // for (let i=5; i >=1; i--){
    //     document.write("<br>");
    //     for(let j=1; j<=i;j++){
    //         document.write(i);
    //     }
    // }
// Pattern 14 - Floyd's Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
    let count=0;
    for (let i=1; i <=5; i++){
        document.write("<br>");
        for(let j= 1; j<=i;j++){
             count++;
            document.write(count);
        }
    }

// Pattern 15 - 0-1 Pattern
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

    // for(let i=1;i<=5;i++){
    //     document.write("<br>");
    //     for(let j=1;j<=i;j++){
    //         if((i+j) % 2 == 0){
    //             document.write("1");
    //         } 
    //         else {
    //             document.write("0");
    //         }
    //     }
    // }
// Pattern 16 - Hollow Rectangle
// * * * * *
// *       *
// *       *
// * * * * *
    // for(let i=1;i<=4;i++){
    //     document.write("<br>");
    //     for(let j=1;j<=5;j++){
    //         if(i == 1 || i == 4 || j == 1 || j == 5){
    //             document.write("* ");
    //         } else {
    //             document.write("&nbsp;&nbsp;&nbsp;");
    //         }
            
    //     }
    // }

// Pattern 17 - Pyramid
//        *
//      * * *
//    * * * * *
//  * * * * * * *
// * * * * * * * * *

    for (let i=1; i<=5; i++){
        let str="";
        for(let j=1; j<=5-i; j++){
            str += " ";
        }
        for(let k=1; k<=i*2-1;k++){
            str +="*";
        }
        document.write(str);
    }

// Pattern 18 - Inverted Pyramid
// * * * * * * * * *
//  * * * * * * *
//    * * * * *
//      * * *
//        *

// for(let i=5;i>=1;i--){
//     let str="";
//     for(let j =1;j<=5-i;j++){
//         str +=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str +="*";
//     }
//     console.log(str);
// }

// Pattern 19 - Diamond
//        *
//      * * *
//    * * * * *
//  * * * * * * *
// * * * * * * * * *
//  * * * * * * *
//    * * * * *
//      * * *
//        *

    // for (let i=1; i<=5; i++){
    //     let str="";
    //     for(let j=1; j<=5-i; j++){
    //         str += " ";
    //     }
    //     for(let k=1; k<=i*2-1;k++){
    //         str +="*";
    //     }
    //     console.log(str);
    // }
    // for(let i=4;i>=1;i--){
    //     let str="";
    //     for(let j =1;j<=5-i;j++){
    //         str +=" ";
    //     }
    //     for(let k=1;k<=2*i-1;k++){
    //         str +="*";
    //     }
    //     console.log(str);
    // }
// Pattern 20 - Butterfly
// *               *
// * *           * *
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *

// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *
