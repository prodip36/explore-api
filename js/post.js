function loadPost(){
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(post => showPost(post));
}
function showPost(post)
{
    const postContainer= document.getElementById('post-container');
    for(const data of post){
        const postDiv= document.createElement('div');
        postDiv.classList.add('post-container-class');
        postDiv.innerHTML= `
        <h4>User- ${data.id}</h4>
        <h5 class"heading">Post: ${data.title}<h5>
        <p>Post Description: ${data.body}</p>
        <br> <br>
        `
        postContainer.appendChild(postDiv);
    }
}
