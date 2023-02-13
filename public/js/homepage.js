const commentModal = document.getElementById("comment-modal");
const submitCommentBtn = document.getElementById("submit-comment-modal-btn");
const closeCommentBtn = document.getElementById("close-comment-modal-btn");
const commentMessageInput = document.getElementById("comment-message-input");

const commentButtons = document.querySelectorAll(".comment-button");


commentButtons.forEach(button => {
    button.addEventListener('click', event => {
        const blogId = event.target.closest(".blog-post").id;
        document.getElementById("blog-id").textContent = blogId;
        commentModal.style.display = "block";
    });
});

closeCommentBtn.onclick = function() {
    //clear form then hide
    document.getElementById("blog-id").textContent = "";
    commentMessageInput.value = "";
};

submitCommentBtn.addEventListener("click", async () => {
    const message = commentMessageInput.value;
    const id = document.getElementById("blog-id").textContent;
  
    try {
      const response = await fetch("/api/comment/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blog_id: id,
          message: message
        })
      });
      if (response.ok) {
        commentMessageInput.value = "";
        document.getElementById("blog-id").textContent = "";
        commentModal.style.display = "none";
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  });