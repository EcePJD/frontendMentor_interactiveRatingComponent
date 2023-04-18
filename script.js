let btnSubmit;
let selectedRateClass = "rate-selected";
let previousSelection = "";
let rateElement;
let rateScore = 0;

function rateSelect( rate ) {
    if( btnSubmit == null ) {
        btnSubmit = document.getElementById( 'btn-submit' );
    }

    let currentSelection = 'rate-' + rate;
    rateElement = document.getElementById( currentSelection );

    if( previousSelection == currentSelection  ) {
        rateElement.classList.remove(selectedRateClass);
        previousSelection = "";
        btnSubmit.classList.remove( 'btn-enabled' );
        btnSubmit.setAttribute( 'disabled', true );
    } else {
        rateElement.classList.add(selectedRateClass);
        if( previousSelection.length > 0 ) {
            rateElement = document.getElementById( previousSelection );
            rateElement.classList.remove(selectedRateClass);
        }
        rateScore = rate;
        previousSelection = currentSelection;
        btnSubmit.classList.add( 'btn-enabled' );
        btnSubmit.removeAttribute('disabled');
    }
}

function submitRate() {
    if( rateScore > 0 ) {
        let rateModule = document.getElementById( 'container-rating' );
        let thankYouModule = document.getElementById( 'container-thankyou' );
        let rateFinal = document.getElementById( 'rate-final' );

        rateFinal.innerHTML = "You selected " + rateScore + " out of 5";
        rateModule.classList.add( 'container-fadeOut' );
        thankYouModule.classList.add( 'container-fadeIn' );
    }
}