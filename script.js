document.addEventListener("DOMContentLoaded", () => {
  // Fetch the generated manifest of HTML files
  fetch("files.json")
    .then((response) => response.json())
    .then((files) => {
      const ul = document.getElementById("toc");

      files.forEach((file) => {
        // Some workflows prefix paths with "docs/"; strip that if present:
        let href = file.path.replace(/^docs\//, "");

        // Build: <li><a href="...">filename</a></li>
        const li = document.createElement("li"); // DOM creation :contentReference[oaicite:2]{index=2}
        const a = document.createElement("a");
        a.textContent = file.name;
        a.href = href;
        li.appendChild(a); // Append child nodes :contentReference[oaicite:3]{index=3}
        ul.appendChild(li);
      });
    })
    .catch((err) => console.error("Failed to load table of contents:", err));
});
