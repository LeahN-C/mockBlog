//Fetch users and posts from the placeholder data site
//Display the fetched data in the HTML elements on the page
//When user clicks on author's name, the link take the user to the author page
//AND passes the author name to the new page in the URL
//When the user clicks on a post, link takes user to the post page
//AND passes the post ID to the new page in the URL

async function getAuthor() {
  //Selecting the id of authors
  let authors = document.querySelector("#authors");
  //Selecting the id of posts
  let posts = document.querySelector("#posts");
  //Get a URL for the request(req) - users page
  let usersUrl = "https://jsonplaceholder.typicode.com/users/";
  //Get URL for the request(req) - posts page
  let postsUrl = "https://jsonplaceholder.typicode.com/posts/";
  //Use URL to make a get request(req) - assign response(usersRes)
  let usersRes = await fetch(usersUrl);
  //Use URL to make a get request(req) - assign response(postsRes)
  let postsRes = await fetch(postsUrl);
  //Assign usersResJSON to waiting for a response from json
  let usersResJSON = await usersRes.json();
  //Assign postsResJSON to waiting for a response from json
  let postsResJSON = await postsRes.json();
  //for loop - each "i" is a <li> element
  for (let i = 0; i < usersResJSON.length; i++) {
    //Assign a as a new <anchor> element
    let b = document.createElement("a");
    //Assign newAuthor to creating a new <li> element
    let newAuthor = document.createElement("li");
    let authorNameOnNewPage = document.getElementById("authorName");
    //Change text content of each <li> element to be the names in the url above
    b.textContent = usersResJSON[i].name;
    //Setting b new attribute on a to link this url to each list item
    b.setAttribute("href", "author.html");
    //Append the child "newAuthor" to the parent "authors"
    authors.appendChild(newAuthor);
    //Append another child "b" the parent "newPost"
    newAuthor.appendChild(b);
    
    //let authorPage = document.location("author.html");
//
    //let authorPageAuthorName = document.location.h1.textContent;
    //authorPageAuthorName = newAuthor;
    //if () 
    //newAuthor.onclick = document.location = "author.html?name=" + b;
  }
  for (let i = 0; i < postsResJSON.length; i++) {
    //Assign a as a new <anchor> element
    let a = document.createElement("a");
    //Assign newAuthor to creating a new <li> element
    let newPost = document.createElement("li");
    //Change text content of each <li> element to be the names in the url above
    a.textContent = postsResJSON[i].title;
    //Setting a new attribute on a to link this url to each list item
    a.setAttribute("href", "post.html");
    //Append the child "newAuthor" to the parent "authors"
    posts.appendChild(newPost);
    //Append another child "a" the parent "newPost"
    newPost.appendChild(a);
  }
}
//Call the function
getAuthor();
