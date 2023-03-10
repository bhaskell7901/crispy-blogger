// Get modal elements
const newBlogModal = document.getElementById("new-blog-modal");
const openNewBlogBtn = document.getElementById("open-new-blog-modal-btn");
const submitNewBlogBtn = document.getElementById('submit-new-modal-btn');
const closeNewBlogBtn = document.getElementById("close-new-modal-btn");
const newBlogTitleInput = document.getElementById('new-title-input');
const newMessageInput = document.getElementById('new-message-input');

const editBlogModal = document.getElementById("edit-blog-modal");
const submitEditBlogBtn = document.getElementById('submit-edit-modal-btn');
const closeEditBlogBtn = document.getElementById("close-edit-modal-btn");
const editBlogTitleInput = document.getElementById('edit-title-input');
const editMessageInput = document.getElementById('edit-message-input');

const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");

// New modal functions
openNewBlogBtn.onclick = function() {
  newBlogModal.style.display = "block";
};

closeNewBlogBtn.onclick = function() {
  newBlogModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == newBlogModal) {
    newBlogModal.style.display = "none";
  }
};

submitNewBlogBtn.addEventListener('click', async () => {
  const title = newBlogTitleInput.value;
  const message = newMessageInput.value;

  try {
    const response = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        message
      })
    });
    if (response.ok) {
      newBlogTitleInput.value = "";
      newMessageInput.value = "";
      newBlogModal.style.display = "none";
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
});

// Edit modal functions
editButtons.forEach(button => {
  button.addEventListener('click', event => {
    const blogPost = event.target.closest(".blog-post");
    const titleAndMessage = blogPost.children;
    const id = blogPost.id;
    
    editBlogTitleInput.value = titleAndMessage[2].textContent;
    editMessageInput.value = titleAndMessage[3].textContent;
    document.getElementById("blog-id").textContent = id;

    editBlogModal.style.display = "block";
  });
});

closeEditBlogBtn.onclick = function() {
  //clear form then hide
  document.getElementById("blog-id").textContent = "";
  editBlogTitleInput.value = "";
  editMessageInput.value = "";
  editBlogModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == editBlogModal) {
    editBlogModal.style.display = "none";
  }
};

submitEditBlogBtn.addEventListener('click', async () => {
  const title = editBlogTitleInput.value;
  const message = editMessageInput.value;
  const id = document.getElementById("blog-id").textContent;

  try {
    const response = await fetch("/api/blog/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        title,
        message
      })
    });
    if (response.ok) {
      editBlogTitleInput.value = "";
      editMessageInput.value = "";
      document.getElementById("blog-id").textContent = "";
      editBlogModal.style.display = "none";
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
});

// Delete blog functions
deleteButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    const id = event.target.closest(".blog-post").id;
    
    var confirm = window.confirm("Your blog and all comments will be deleted. This cannot be undone.\nAre you sure you want to delete?");
    if( confirm ){
      try {
        const response = await fetch("/api/blog/" + id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id
          })
        });
        if (response.ok) {
          editBlogModal.style.display = "none";
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
});
