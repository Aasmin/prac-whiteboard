function createSticky() {
    //     <div class="stickyPad">
    //     <div class="navbar">
    //         <div class="close"></div>
    //         <div class="minimize"></div>
    //     </div>
    //     <div class="container"><textarea name="" id="" cols="30" rows="10"></textarea></div>
    // </div>  
    let container = createBox();
    let textarea = document.createElement("textarea");
    container.appendChild(textarea);
    textarea.setAttribute("class", "textarea"); 
} 