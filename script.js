document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profileForm");

    if (profileForm) {
        profileForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const bio = document.getElementById("bio").value;
            const profilePic = document.getElementById("profile-pic").files[0];

            let profileData = `Name: ${name}\nEmail: ${email}\nBio: ${bio}`;
            alert("Profile Created Successfully!\n\n" + profileData);

            // If a profile picture is uploaded, display it
            if (profilePic) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = document.createElement("img");
                    img.src = event.target.result;
                    img.style.maxWidth = "150px";
                    document.body.appendChild(img);
                };
                reader.readAsDataURL(profilePic);
            }

            // Redirect to home page after 2 seconds
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        });
    }
});
