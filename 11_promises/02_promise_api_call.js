fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    console.log("Post Title:", data.title);
    console.log("Post User ID:", data.userId);
  })
  .catch(error => {
    console.error("Fetch error:", error.message);
  });
