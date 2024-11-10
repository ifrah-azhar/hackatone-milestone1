function generateResume(): void {
  // Basic Info
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
  const imageInput = document.getElementById("image") as HTMLInputElement;

  (document.getElementById("displayName") as HTMLElement).textContent = name;
  (document.getElementById("displayEmail") as HTMLElement).textContent = email;
  (document.getElementById("displaySummary") as HTMLElement).textContent = summary;

  // Education
  const education = (document.getElementById("education") as HTMLInputElement).value;
  (document.getElementById("displayEducation") as HTMLElement).textContent = education;

  // Work Experience
  const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
  (document.getElementById("displayWorkExperience") as HTMLElement).textContent = workExperience;

  // Skills
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  (document.getElementById("displaySkills") as HTMLElement).textContent = skills.split(',').map(skill => skill.trim()).join(', ');

  // Display selected image
  const displayImage = document.getElementById("displayImage") as HTMLImageElement;
  if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e: ProgressEvent<FileReader>) {
          if (e.target) {
              displayImage.src = e.target.result as string;
          }
      };
      reader.readAsDataURL(imageInput.files[0]);
  }
}

