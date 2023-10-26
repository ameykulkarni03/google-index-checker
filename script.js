// Get reference to table
const resultsTable = document.getElementById('resultsTable');

// Event handler
resultsTable.querySelector('tr').style.display = 'none'; 

document.getElementById("checkButton").addEventListener("click", () => {

  // Get input data
  resultsTable.querySelector('tr').style.display = '';
  const urlInput = document.getElementById("urlInput").value;
  const urls = urlInput.split("\n").filter(url => url.trim() !== "");

  // Clear previous results
  resultsTable.innerHTML = '';
  
  // Check each URL
  urls.forEach(url => {
    fetch("check-index.php?url=" + encodeURIComponent(url))
      .then(response => response.text())
      .then(data => {
        
        // Create a new row
        const row = document.createElement('tr');
        
        // Add URL and result columns
        row.innerHTML = `
          <td>${url}</td>
          <td>${data}</td>
        `;

        // Add row to table    
        resultsTable.appendChild(row);

      });
  });

});