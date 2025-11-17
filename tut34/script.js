let b = document.body;
console.log("First child of b is : ", b.firstChild);
console.log("First Element child of b is : ",b.firstElementChild);
console.log("Last Element child of b is : ",b.lastElementChild);

let changeBgRed = () => {
    document.body.firstElementChild.style.background = "red";
}

// changeBgRed();

// select ul tag  and write below mentioned code and check it .

/* 

$0.childNodes

$0.children // this is like childElementNodes which is not available .

*/