function getAllPosts() {
    const postElement = document.getElementById('posts')
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(response =>{ 
            for(var i =0; i<response.length; i++){
                const h2 = document.createElement('h2')
                h2.innerHTML = response[i].name

                const body = document.createElement('p')
                body.innerHTML = response[i].body

                const comBtn = document.createElement('button')
                comBtn.innerHTML = 'Comments'
                comBtn.setAttribute('onclick',showComments(response[i]))

                const div = document.createElement('div')
                div.appendChild(h2)
                div.appendChild(body)
                div.appendChild(comBtn)
                postElement.appendChild(div)




                function showComments(showComments){
                     const comment = document.createElement('h4')
                     comment.innerHTML = 'Comment of '+showComments.name 

                     
                }
                
            }
        })

}

