//* Fetch data from the following API endpoint: `https://jsonplaceholder.typicode.com/todos`
//* Display the titles of the first 5 todos in an unordered list on the page.

const basicFetch =  () => {
  const uList = document.getElementById('displayFetched');

    fetch('https://jsonplaceholder.typicode.com/todos', {method:'GET'})
      .then(response=>response.json())
      .then(response=>response.slice(0,5))
      .then(response=>response.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element.title;
        uList.appendChild(li);
      })
    )
};

//++++ autre proposition avec un traitement des erreurs: 

// const basicFetch = async () => {
//   try {
//       const uList = document.getElementById('displayFetched');
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const todos = await response.json();      
//       todos.slice(0, 5).forEach(el => {
//           const li = document.createElement('li');
//           li.textContent = el.title;
//           uList.appendChild(li);
//       });
//   } catch (error) {
//       console.error('Fetch error', error);
//   }
// };


export default basicFetch;
