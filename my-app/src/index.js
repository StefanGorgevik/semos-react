const newDiv = () => {
    const div = document.createElement("div");
    div.innerHTML = "<form><label>Email:<input type='text'></label><input type='submit'><form>" 
    document.body.append(div); 
}

newDiv();