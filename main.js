// Set copyright year
document.getElementById('copy_year').textContent = new Date().getFullYear();

// Initialize the modal
const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
const distanceForm = document.getElementById('distanceForm');

// Reset form when modal is closed
document.getElementById('resultModal').addEventListener('hidden.bs.modal', function () {
    distanceForm.reset();
});

document.getElementById('distanceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const freq = parseFloat(document.getElementById('freq').value);
    const rssi = parseFloat(document.getElementById('rssi').value);
    const resultDiv = document.getElementById('result');
    
    // Input validation
    if (isNaN(freq) || isNaN(rssi)) {
        showError("Please enter valid frequency and RSSI values.");
        return;
    }

    // Frequency range validation (common WiFi frequencies)
    if (freq < 2400 || freq > 6000) {
        showError("Frequency should be between 2400 MHz and 6000 MHz");
        return;
    }

    // RSSI range validation
    if (rssi > 0 || rssi < -100) {
        showError("RSSI should be between -100 dBm and 0 dBm");
        return;
    }

    try {
        const exp = (27.55 - (20 * Math.log10(freq)) + Math.abs(rssi)) / 20.0;
        const distance = Math.pow(10, exp).toFixed(2);

        resultDiv.classList.remove('alert', 'alert-danger');
        resultDiv.innerHTML = `
            <div class="text-center mb-4">
                <h1 class="display-4 mb-0">${distance}</h1>
                <p class="lead">meters</p>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <h6 class="card-title">📶 Frequency</h6>
                            <p class="card-text">${freq} MHz</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <h6 class="card-title">📊 RSSI</h6>
                            <p class="card-text">${rssi} dBm</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Show the modal
        resultModal.show();
    } catch (error) {
        showError("An error occurred during calculation. Please try again.");
    }
});

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="alert alert-danger">
            ⚠️ ${message}
        </div>
    `;
    resultModal.show();
}