const posts = [
    {author:"User 1", content:"Lorem ipsum."},
    {author:"User 2", content:"Lorem ipsum dolor."},
    {author:"User 3", content:"Lorem ipsum dolor sit."},
    {author:"User 4", content:"Lorem ipsum dolor sit amet."}
]


const listPosts = () => {
    posts.map(post=>{

        try{
            console.log(`User: ${post.author}\n\tContent: ${post.content}`);
        }catch(err){
            console.log("Post listelenemiyor.");
        }
    
    })
}


const addPost = (newPost) => {
    if (newPost != ""){
        posts.push(newPost);
    }else{
        console.log("Boş post atılamaz!");
    }
}

const showPosts = (callback) => {
    listPosts();
    callback({author:"erenyata",content:"Kılıçdaroğlu Aday Olmasın!"});
    listPosts();
}

showPosts(addPost);