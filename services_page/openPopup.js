// Get the modal and buttons
// const cardPopup = document.getElementById('cardPopup');
// const openCardButton = document.getElementById('openCardButton');
// const closeCardButton = document.getElementById('closeCardButton');

let listOfCardsPopups = [
    "cardPopupWebDevelopment","cardPopupDataVisualization",
    "cardPopupDatabases", "cardPopupServers",
    "cardPopupGISSolutions"
];
    let listOfCardsButtonsOpen = [
    "openWebDevelopmentCardButton","openDataVisualizationButton",
    "openDatabasesButton", "openServersButton",
    "openGISSolutionsButton"
];
let listOfCardsButtonsClose = [
    "closeWebDevelopmentCardButton","closeDataVisualizationButton",
    "closeDatabasesCardButton", "closeServersCardButton",
    "closeGISSolutionsCardButton"
]; 

for (let el = 0; el<= listOfCardsPopups.length; el++){
    let cardPopup = document.getElementById(listOfCardsPopups[el]);
    let openCardButton = document.getElementById(listOfCardsButtonsOpen[el]);
    let closeCardButton = document.getElementById(listOfCardsButtonsClose[el]);


    // Close the card popup when clicking outside of the card
    cardPopup.addEventListener('click', (event) => {
        if (event.target === cardPopup) {
            cardPopup.style.display = 'none'; // Hide the card
        }
    });
    
    // Open the card popup
    openCardButton.addEventListener('click', () => {
        cardPopup.style.display = 'flex'; // Show the card
    });
    
    // Close the card popup
    closeCardButton.addEventListener('click', () => {
        cardPopup.style.display = 'none'; // Hide the card
    });
    
}
    // start = False
// }
// else {
//     console.log("DRUGI I KOLEJNY RAZ");
// }