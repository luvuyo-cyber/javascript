2.  document.body.textContent = "Hello World";

3. for (const property in document) {
 console.log(`${property}: ${document[property]}`);
}

4. for (const property in window) {
 console.log(`${property}: ${document[window]}`);
}

5. <script>
 const output = document.querySelector('h1');
 output.textContent = "Hello World";
 </script>