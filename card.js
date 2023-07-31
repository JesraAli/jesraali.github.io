document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');
    const popupImage = document.getElementById('popupImage');
    const popupName = document.getElementById('popupName');
    const popupWebsiteLink = document.getElementById('popupWebsiteLink');
    const popupGithubLink = document.getElementById('popupGithubLink');
    const projectList = document.querySelector('.projectList');
  
    function showPopup(card) {
      const cardImage = card.dataset.image;
      const cardName = card.dataset.name;
      const cardWebsiteLink = card.dataset.website;
      const cardGithubLink = card.dataset.github;
  
      popupImage.src = cardImage;
      popupName.textContent = cardName;
      popupWebsiteLink.href = cardWebsiteLink;
      popupGithubLink.href = cardGithubLink;
  
      popup.classList.add('popup-show');
    }
  
    function hidePopup() {
      popup.classList.remove('popup-show');
    }
  
    closeButton.addEventListener('click', hidePopup);
  
    window.addEventListener('click', function (event) {
      if (event.target === popup) {
        hidePopup();
      }
    });
  
    // Use event delegation to handle clicks on cards
    projectList.addEventListener('click', function (event) {
      const card = event.target.closest('.card');
      if (card) {
        showPopup(card);
      }
    });
  });
  
