document.getElementById("copy-btn-text-eth").addEventListener("click", function() {
    // Get the Bitcoin address
    var ethAddress = document.getElementById("eth-address").value;
    
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", ethAddress);
    document.body.appendChild(tempInput);
    
    // Select the Bitcoin address text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */
    
    // Copy the Bitcoin address to clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);
    
    // Provide feedback to the user
    alert("Etherium address copied to clipboard: " + ethAddress);
});