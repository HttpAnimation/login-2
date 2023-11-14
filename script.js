document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    fetch("Data.ini")
      .then(response => response.text())
      .then(data => {
        const lines = data.split("\n");
        const parsedData = {};
        lines.forEach(line => {
          const [key, value] = line.split(":");
          parsedData[key.trim()] = value.trim();
        });
  
        if (parsedData.user === username && parsedData.pass === password) {
          window.location.href = "https://exp.com";
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error fetching login data:", error);
        alert("An error occurred while fetching login data.");
      });
  });
  