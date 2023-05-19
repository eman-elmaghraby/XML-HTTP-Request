let result = document.querySelector("div");

let myRequest = new XMLHttpRequest();
myRequest.open("GET", `https://jsonplaceholder.typicode.com/photos`);
myRequest.send();

myRequest.onreadystatechange = () => {
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    let myData = JSON.parse(myRequest.response);
    myData.forEach((user) => {
      if (user.id < 60 && user.id > 49) {
        let showData = `
        
        <img src='${user.thumbnailUrl}'/>
       <p>ID: ${user.id}</p>
       <p>Title: ${user.title}</p>
      
       `;

        result.innerHTML += showData;
      }
    });
  }
};
