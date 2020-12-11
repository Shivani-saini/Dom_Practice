// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// });

// let result= await response.json();
// alert(result.message);

const getPosts = () =>{
    return fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => console.log(posts))
}

const post = {
    title: 'All about fetch!',
    body: 'Fetch is so cool!',
    userId: 1
}


const newPost = async post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
        
  try {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts', options)
        const res_1 = await res.json()
        return console.log(res_1)
    } catch (error) {
        return console.error('Error: ${error}')
    }
}
newPost(post)