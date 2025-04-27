document.addEventListener("DOMContentLoaded", () => {
  fetch("files.json") // load manifest at site root :contentReference[oaicite:7]{index=7}
    .then((res) => res.json())
    .then((files) => {
      const ul = document.getElementById("toc");
      files.forEach(({ name, path }) => {
        const li = document.createElement("li"); // DOM creation
        const a = document.createElement("a");
        a.textContent = name;
        a.href = path; // e.g. "test.html"
        li.appendChild(a); // appendChild
        ul.appendChild(li);
      });
    })
    .catch((err) => console.error("Failed to load TOC:", err));
});
