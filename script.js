// let guestList = "Shorux Alex Jimmy Baxa".toLowerCase()

// let guest = prompt("What is your name ?")

// if (guestList.includes(guest.toLowerCase().trim())) {   
//     alert("Welcome mr/ms " + guest)
// } else {
//     alert("Sorry mr/ms " + guest)
// }

/* Sample */

// let assd = alert("Welcome to the restaurant !")

// let restaurant = "Shorux Farzod Samir Abdi Axmed Hasan/Husen".toLowerCase()
// let restau = prompt("What can i call you ?")

// if (restaurant.includes(restau.toLowerCase().trim())) {
//     alert("Welcome my man")
// } else {
//     alert("Fuck off")
// }



// let arr = ['samir', 'abdi', 'farzod', 'mamajani']

// // // arr.push('jesko', 'venom')  // end
// // arr.unshift('laziz', 'parviz')  // start

// // arr.pop()  // delete last
// // arr.shift()  // delete first

// // arr.splice(2,1, 'anton' )  // index,amount, replace
// /*  OR */
// // arr.splice(arr.indexOf('abdi'),1,)

// console.log(arr);



// let arr = ['amir', 'samir', 'farzod', 'farux', 'shoxa']
// let num = prompt('any number')
// if (num >= 0 && num < arr.length) {
//     arr.splice(num, 1)
// } else {
//     alert('ERROR')
// }
// console.log(arr);



// let arr = ['damir', 'samir', 'farzod', 'shoxrux']

// let num = +prompt('number')

// switch (num) {
    //     case 0:
    //         alert(arr[0])
    //         break;
    //     case 1:
    //         alert(arr[1])
    //         break;
    //     case 2:
    //         alert(arr[2])
    //         break;
    //     case 3:
    //         alert(arr[3])
    //         break;
    
    //     default:
    //         alert("error")
    //         break;
    // }

    
    // dz

//    let arr = ['farzod','shorux','samir','laziz']
//    let name = prompt('name')

//    let idx = arr.indexOf(name)
//    if (idx >= 0) {
//         console.log(`${arr[idx]} was removed !`);
//         arr.splice(idx,1)
//    } else {
//     alert('error')
//    }
   
//    console.log(arr);


    // 13.04

    // let arr = ['damir', 'samir', 'farzod', 'shohrux', 'alex']

    // let callBack = (name) => name[0] === 's'  
    // let callBackOne = (name) => name[0] === 's'  
    // let callBackTwo = (name) => name.length === 6

    // console.log(

    // //     arr.find(callBack),  // first name with letter (s) 
    // //     arr.filter(callBackOne),  // all name with letter (s)
    // //     arr.find(callBackTwo), 
    // //     arr.filter((name) => name.length % 2)  // нечетные элементы (имена)

    // );



    // ZD

    // let arr = [1,2,3,4,5]

    // let total = 0
    // arr.filter((num) => total = total + num)

    // console.log(total);



    // DZ


    let arr = [1,2,4,'alex', [1,2], {}, null,true, false, undefined,]

    let str = 0
    let num = 0
    let obj = 0
    let boolean = 0
    let others = 0

    arr.forEach(element => {
        if (typeof element === 'string') {
            str++;
        } else if (typeof element === 'number') {
            num++;
        }
         else if (typeof element === 'boolean') {
            boolean++
        }
        else if (typeof element === 'object') {
            if (element === null) {
            others++; 
            } else {
                obj++;
            }
        } else {
            others++; 
        }
    });

    console.log('string',str);
    console.log('numbers',num);
    console.log('objects',obj);
    console.log('boolean',boolean);
    console.log('others',others);



  
    
