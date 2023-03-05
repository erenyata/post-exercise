const posts = [
    {author:"User 1", content:"Lorem ipsum."},
    {author:"User 2", content:"Lorem ipsum dolor."},
    {author:"User 3", content:"Lorem ipsum dolor sit."},
    {author:"User 4", content:"Lorem ipsum dolor sit amet."}
]


const listPosts = () => {
    posts.map(post=>{
        console.log(`User: ${post.author}\n\tContent: ${post.content}`)
    })
}

const addPost = (newPost) => {
    
    const promise = new Promise((resolve,reject)=>{
        if (newPost != ""){
            posts.push(newPost);
            resolve("addPost succeed.");
        }else {
            resolve("addPost failed.")
        }
    })

    return promise;
}

addPost({author:"erenyata",content:"Kılıçdaroğlu Aday Olmasın!"})
    .then(()=>{
        listPosts();
    }).catch((err)=>{
        console.log(err);
    })

