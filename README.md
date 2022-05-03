1. Execute `pnpm install`
2. Execute `pnpm run dev`
3. Open the http://localhost:3000/ page in the browser and open the browser console
4. Click to the "Click me" button. As you can see, onMount doesn't triggered on click (this is the correct behavior).
5. Now change the index.svelte file. For example, replace console.log('onMount') to console.log('onMount2')
6. Refresh the page in the browser (F5, Ctrl+R, etc.)
7. Click to the "Click me" button
