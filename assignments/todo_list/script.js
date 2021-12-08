var input = document.querySelector("input");
var button = document.querySelector("button");
var element = document.querySelector("div.todos");

let count = 0
button.addEventListener("click",function(){
    console.log(input.value);
    if(input.value){
        var create_new =  document.createElement('p');
        create_new.innerHTML = input.value;
        create_new.setAttribute("key",count++);
        element.appendChild(create_new);
        create_new.addEventListener("click",function(e){
            console.log("I am clicked");
            var key = e.target.getAttribute("key");
            console.log("key-",key);
            document.querySelector(`p[key = "${key}"]`).remove();
        })
        input.value = ""
    }
})