document.getElementById("copy-btn-text-disc").addEventListener("click", function() {
    // Get the Bitcoin address
    var discAddress = document.getElementById("disc-address").value;
    
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", discAddress);
    document.body.appendChild(tempInput);
    
    // Select the Bitcoin address text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */
    
    // Copy the Bitcoin address to clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);
    
    // Provide feedback to the user
    alert("Discord user copied to clipboard: " + discAddress);
});