// window.onload = () => {
//     let list = document.querySelector("#loc");

//     document.onclick = (event) => {
//         if(event.target.id == "loc"){
//             list.style.display = "block";
//         }
//         else {
//             list.style.display = "none";
//         }
//     }
// }


// Thambnails

var i = 0;
var img = [];
var time = 1000;
img[0] = "https://product-assets.faasos.io/production/product/image_1620280991048_Faasos%20Combo_3%20May_Classic%20Wraps%20%281%29.jpg";
img[1] = "https://product-assets.faasos.io/production/product/image_1618561895209_Faasos%20Chinese%20wraps_website%20banner%20%281%29.jpg";
img[2] = "https://product-assets.faasos.io/production/product/image_1620280380694_Banner%201%20%281%29.jpg";
img[3] = "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg";
img[4] = "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg";

function changeImg() {
    document.slide.src = img[i];

    if (i < img.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", 2000);
}

window.onload = changeImg;



// search input

// var cnt = 0;
// var big = document.querySelector("#search");
// big.addEventListener("click",function(){
//     cnt++;

//     var big = document.querySelector("#desk")
//     if(cnt == 1){
//         big.style.cssText = 'visibility: visible'
//         document.querySelector("#nav").style.display = "none";
//         return;
//     }
//     else{
//         big.style.cssText = 'visibility: hidden'
//         cnt = 0;
//         return;
//     }
// });



// var Data = [];

// // main data 

//     var foodData = JSON.parse(localStorage.getItem("food-Data")) || [];
//     var cartData = JSON.parse(localStorage.getItem("mainCart")) || [];
//     console.log("cartData",cartData)
//     console.log("Food_Data",foodData)


//     function displayData (arr) {
//         document.querySelector("#main").innerHTML = "";
//          arr.map(function(data){
//             var div = document.createElement("div");

//             var div1 = document.createElement("div");
//             div1.setAttribute("id","imgDiv");;

//             var image = document.createElement("img");
//             image.setAttribute("src",data.img_url)
//             image.style.marginBottom = "20px"
//             image.style.borderRadius = "5px"



//            var div2 = document.createElement("div");
//            div2.setAttribute("id","flex1");

//             var name = document.createElement("p");
//             name.textContent = data.food_name;
//             name.style.fontWeight = "bold"
//             name.style.fontSize = "18px"
//             name.style.marginLeft = "12px"
//             // name.style.marginBottom = "30px"


//             var price = document.createElement("p");
//             price.textContent = "₹"+data.Price;
//             price.style.marginRight = "20px"


//             var div3 = document.createElement("div");
//             div3.setAttribute("id","flex");

//             function reatingItem(max){
//                 return (Math.random()*max).toFixed(1);
//             }

//             var reating = document.createElement("p");
//             reating.textContent = "★"+" "+reatingItem(5);
//             reating.style.backgroundColor = "green";
//             reating.style.color = "white";
//             reating.style.width = "45px";
//             reating.style.borderRadius = "2px";
//             reating.style.marginLeft = "12px"


//             var btn = document.createElement("button");
//             btn.textContent = "ADD"
//             btn.style.backgroundColor = "#fd4"
//             btn.style.border = "none";
//             btn.style.width = "90px"
//             btn.style.height = "30px"
//             btn.style.fontWeight = "bold"
//             btn.style.borderRadius = "4px";
//             btn.style.marginRight = "20px"
//             btn.onclick = ()=>{
//                 // console.log(1);

//                 Data.push(data);
//                  localStorage.setItem("mainCart",JSON.stringify(Data));
//                  printData(Data);
//             };


//             var div4 = document.createElement("div");
//             div4.setAttribute("id","flex");

//             var p = document.createElement("p");
//             p.textContent = "17.2k bought this";
//             p.style.color = "gray";
//             p.style.marginLeft = "12px"
//             p.style.fontSize = "small"

//             var p2 = document.createElement("p");
//             p2.textContent = "Customisable";
//             p2.style.color = "gray";
//             p2.style.marginRight = "20px"
//             p2.style.fontSize = "x-small"

//            div1.append(image)
//            div2.append(name,price);
//            div3.append(reating,btn);
//            div4.append(p,p2)

//             div.append(div1,div2,div3,div4);

//             image.onclick = ()=>{
//                 localStorage.setItem("clicked_Image",JSON.stringify(data));
//                 window.location.href = "../product.html"
//             }
//             document.querySelector("#main").append(div);
//         });
//     }

//     displayData(foodData);



//     // cart data


//    function printData(Data){
//     if(Data.length <=0){
//         document.querySelector("#cartDiv").style.display = "none";
//         document.getElementById("mainCartDatahead").textContent = "There are no products in your Cart."
//         // return;
//     }
//     document.getElementById("mainCartDatahead").style.display = "none";
//     document.querySelector("#cartDiv").style.display = "block";

//        document.querySelector("#cartData").innerHTML="";
//        Data.map(function(item, index){
//            console.log(item);


//            var div = document.createElement("div");
//            div.setAttribute("id","cart1");

//            var div1 = document.createElement("div");
//            div1.setAttribute("id","div1");

//            var name = document.createElement("p");
//            name.textContent = item.food_name;
//            name.setAttribute("id","name1")


//             div1.append(name);

//             var div2 = document.createElement("div");
//             div2.setAttribute("id","div2");

//            var price = document.createElement("p");
//            price.textContent = "₹"+item.Price;

//            div2.append(price);

//            var div3 = document.createElement("div");
//            div3.setAttribute("id","div3");

//            var remove = document.createElement("p");
//            remove.textContent = "Remove";
//            remove.id = "remove_btn"


//            remove.addEventListener("click",function(){
//                Data.splice(index,1);
//                abc();
//                localStorage.setItem("mainCart",JSON.stringify(Data)) ;

//                printData(Data);

//            })
//            div3.append(remove);



//            div.append(div1,div2,div3);
//            document.querySelector("#cartData").append(div);

//            abc();

//        })
//    }

//    printData(Data);


//    function abc(){
//        var x = Data.reduce(function(a,b){
//            return +a + +b.Price;
//        },0)

//        console.log("x",x)
//        document.querySelector("#total").textContent = "SubTotal :"+ "₹"+ x ;

//    }



// let veg_filter = document.getElementById('veg_filter');
// let non_veg_filter = document.getElementById('non_veg_filter');

// veg_filter.oninput = () => {
//     let veg_data = [];
//     if(veg_filter.checked) {
//         // console.log(1);
//         foodData.map(function(item) {
//             if(item.tags == "veg") {
//                 veg_data.push(item);
//             }
//         });
//     }
//     else{
//         console.log(0);
//         window.location.href = "index1.html";
//     }
//     console.log(veg_data);

//     displayData(veg_data);
// }

// non_veg_filter.oninput = () => {
//     let Non_veg_data = [];
//     if(non_veg_filter.checked){
//         foodData.map(function(item){
//             if(item.tags == "Non-veg"){
//                 Non_veg_data.push(item);
//             }
//         });
//     }
//     else{
//         window.location.href = "product.html";
//     }
//     console.log(Non_veg_data)
//     displayData(Non_veg_data);
// }

//backend api

let getData = async () => {
    try {
        let res = await fetch("http://localhost:5000/product");
        // console.log(res);
        let data = await res.json();
        console.log("data", data);
        appendData(data);

    } catch (err) {
        console.log(err);
    }
};

getData();

var Data = [];

let dataContainer = document.getElementById("main");


function appendData(data) {
    dataContainer.innerHTML = " ";
    // console.log("pri",data);
    data.forEach(el => {

        var div = document.createElement("div");

        var div1 = document.createElement("div");
        div1.setAttribute("id", "imgDiv");;

        var image = document.createElement("img");
        image.src = el.img_url;
        image.style.marginBottom = "20px";
        image.style.borderRadius = "5px";



        var div2 = document.createElement("div");
        div2.setAttribute("id", "flex1");

        var name = document.createElement("p");
        name.textContent = el.food_name;
        name.style.fontWeight = "bold";
        name.style.fontSize = "18px";
        name.style.marginLeft = "12px";
        name.style.marginBottom = "30px";


        var price = document.createElement("p");
        price.textContent = "₹" + el.Price;
        price.style.marginRight = "20px";


        var div3 = document.createElement("div");
        div3.setAttribute("id", "flex");

        function reatingItem(max) {
            return (Math.random() * max).toFixed(1);
        }

        var reating = document.createElement("p");
        reating.textContent = "★" + " " + reatingItem(5);
        reating.style.backgroundColor = "green";
        reating.style.color = "white";
        reating.style.width = "45px";
        reating.style.borderRadius = "2px";
        reating.style.marginLeft = "12px";


        var btn = document.createElement("button");
        btn.textContent = "ADD";
        btn.style.backgroundColor = "#fd4";
        btn.style.border = "none";
        btn.style.width = "90px";
        btn.style.height = "30px";
        btn.style.fontWeight = "bold";
        btn.style.borderRadius = "4px";
        btn.style.marginRight = "20px";
        btn.onclick = () => {
            // console.log(1);

            Data.push(el);
            localStorage.setItem("mainCart", JSON.stringify(el));
            printData(Data);
        };


        var div4 = document.createElement("div");
        div4.setAttribute("id", "flex");

        var p = document.createElement("p");
        p.textContent = "17.2k bought this";
        p.style.color = "gray";
        p.style.marginLeft = "12px";
        p.style.fontSize = "small";

        var p2 = document.createElement("p");
        p2.textContent = "Customisable";
        p2.style.color = "gray";
        p2.style.marginRight = "20px";
        p2.style.fontSize = "x-small";

        div1.append(image);
        div2.append(name, price);
        div3.append(reating, btn);
        div4.append(p, p2);

        div.append(div1, div2, div3, div4);

        image.onclick = () => {
            localStorage.setItem("clicked_Image", JSON.stringify(el));
            window.location.href = "./product/product_s.html";
        };
        document.querySelector("#main").append(div);
    });
}

appendData(Data);

//cart Data

function printData(Data) {
    if (Data.length <= 0) {
        document.querySelector("#cartDiv").style.display = "none";
        document.getElementById("mainCartDatahead").textContent = "There are no products in your Cart.";
        // return;
    }
    document.getElementById("mainCartDatahead").style.display = "none";
    document.querySelector("#cartDiv").style.display = "block";

    document.querySelector("#cartData").innerHTML = "";
    Data.map(function (item, index) {
        console.log(item);


        var div = document.createElement("div");
        div.setAttribute("id", "cart1");

        var div1 = document.createElement("div");
        div1.setAttribute("id", "div1");

        var name = document.createElement("p");
        name.textContent = item.food_name;
        name.setAttribute("id", "name1");


        div1.append(name);

        var div2 = document.createElement("div");
        div2.setAttribute("id", "div2");

        var price = document.createElement("p");
        price.textContent = "₹" + item.Price;

        div2.append(price);

        var div3 = document.createElement("div");
        div3.setAttribute("id", "div3");

        var remove = document.createElement("p");
        remove.textContent = "Remove";
        remove.id = "remove_btn";


        remove.addEventListener("click", function () {
            Data.splice(index, 1);
            abc();
            localStorage.setItem("mainCart", JSON.stringify(Data));

            printData(Data);

        });
        div3.append(remove);



        div.append(div1, div2, div3);
        document.querySelector("#cartData").append(div);

        abc();

    });
}

printData(Data);


function abc() {
    var x = Data.reduce(function (a, b) {
        return +a + +b.Price;
    }, 0);

    console.log("x", x);
    document.querySelector("#total").textContent = "SubTotal :" + "₹" + x;

}






// let veg_filter = document.getElementById('veg_filter');
// let non_veg_filter = document.getElementById('non_veg_filter');

// veg_filter.oninput = () => {
//     let veg_data = [];
//     if(veg_filter.checked) {
//         // console.log(1);
//         Data.map(function(data) {
//             if(item.tags == "veg") {
//                 veg_data.push(data);
//             }
//         });
//     }
//     else{
//         // console.log(0);
//         window.location.href = "product.html";
//     }
//     console.log(veg_data);

//     appendData(veg_data);
// }

// non_veg_filter.oninput = () => {
//     let Non_veg_data = [];
//     if(non_veg_filter.checked){
//         Data.map(function(data){
//             if(item.tags == "Non-veg"){
//                 Non_veg_data.push(data);
//             }
//         });
//     }
//     else{
//         window.location.href = "product.html";
//     }
//     console.log(Non_veg_data)
//     appendData(Non_veg_data);
// }


let veg_filter = document.getElementById('veg_filter');


veg_filter.addEventListener("click", vegfun);
async function vegfun() {
    try {
        let res = await fetch("http://localhost:5000/product");
        // console.log(res);
        let data = await res.json();

        let veg_data = [];

        data.forEach(item => {
            if (item.tags == "veg") {
                veg_data.push(item);
            }
        });
        console.log(veg_data);
        appendData(veg_data);
    } catch (err) {
        window.location.href = "product.html";
    }

}


let non_veg_filter = document.getElementById('non_veg_filter');




non_veg_filter.addEventListener("click", nonvegfun);
async function nonvegfun() {
    try {

        let res = await fetch("http://localhost:5000/product");
        // console.log(res);
        let data = await res.json();

        let non_veg_data = [];

        data.forEach(item => {
            if (item.tags == "Non-veg") {
                non_veg_data.push(item);
            }
            else {
                window.location.href = "product.html";
            }
        });

        appendData(non_veg_data);

    } catch (err) {

    }

}