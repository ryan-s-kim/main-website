function customizePage() 
{
    // Greeting
    let name = document.getElementById("userName").value;

    if (name.trim() === "") 
    {
        document.getElementById("usergreeting").textContent = "Hello User!";
    } 

    else 
    {
        document.getElementById("usergreeting").textContent = "Hello " + name + "!";
    }
    // Message
    let msg = document.getElementById("userMessage").value;
    document.getElementById("message").textContent = msg;
    
    // Background
    let bgColor = document.getElementById("backgColor").value;
    document.body.style.backgroundColor = bgColor;
}

function addTodoThings() 
{
    let item = document.getElementById("todoThings").value;

    if (item.trim() !== "") // Prevent user from adding empty to do list items
    {
        let li = document.createElement("li");
        li.textContent = item;
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoThings").value = "";
    }
}
