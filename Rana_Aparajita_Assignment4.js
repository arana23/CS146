// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
    let username=document.getElementById("formUsername").value;
    let caption=document.getElementById("formCaption").value;
    let image=fileLocations[document.getElementById("formImg").value];
   // Pass values to addNewPost()
    addNewPost(username, caption, image);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
    var post=document.createElement("div");
    post.className="post";
   // Create a span for the user
    var span=document.createElement("span");
    span.innerHTML=username;
   // Create image element
    var image=document.createElement("img");
    image.src=imgLocation;
    image.alt=caption;
   // Create overlay element
    var postOverlay=document.createElement("div");
    postOverlay.className="postOverlay"
    postOverlay.innerHTML=caption;
   // Add all child elements (order matters)
    post.appendChild(span);
    post.appendChild(image);
    post.appendChild(postOverlay);
   // Add event listeners to post
    post.addEventListener("mouseover",function(){postOverlay.style.opacity=1;});
    post.addEventListener("mouseleave",function(){postOverlay.style.opacity=0;});
    
   // Add post element to post list
    var postList=document.getElementById("postList");
    postList.appendChild(post);
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};