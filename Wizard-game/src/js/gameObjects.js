
function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createWizard(initialState){
            let wizardElement = document.createElement('div')
            wizardElement.classList.add('wizard')

            wizardElement.style.height = initialState.width + 'px';
            wizardElement.style.width = initialState.height + 'px';

            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        }
    }
}