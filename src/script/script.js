// Função para adicionar um novo comentário à lista e armazená-lo no Local Storage
function addComment(name, commentText) {
    const commentList = document.getElementById("comment-list");
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `<strong>${name}:</strong> ${commentText}`;
    commentList.appendChild(commentElement);

    // Armazena o comentário no Local Storage
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name, commentText });
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Capturar o evento de envio do formulário de comentário
const submitButton = document.getElementById("submit-comment");
submitButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment-text").value;
    if (name && commentText) {
        addComment(name, commentText);
        document.getElementById("name").value = "";
        document.getElementById("comment-text").value = "";
    }
});

// Exibe comentários do Local Storage ao carregar a página
function displayComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const commentList = document.getElementById("comment-list");
    comments.forEach(({ name, commentText }) => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `<strong>${name}:</strong> ${commentText}`;
        commentList.appendChild(commentElement);
    });
}

displayComments();