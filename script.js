// Vaccine suggestions based on age
const vaccineData = {
    "0-2": ["Hepatitis B", "DTaP", "Hib", "IPV", "PCV", "RV", "MMR", "Varicella"],
    "3-18": ["DTaP", "IPV", "MMR", "HPV", "MenACWY", "Influenza"],
    "19-64": ["Tdap", "Influenza", "HPV", "Shingles", "Pneumococcal"],
    "65+": ["Influenza", "Pneumococcal", "Shingles", "Tdap"]
};

// Vaccines for animal bites
const animalVaccineData = {
    "dog": ["Rabies", "Tetanus"],
    "cat": ["Rabies", "Tetanus"],
    "other": ["Rabies", "Tetanus"]
};

// Show age-wise vaccines
function showVaccines(ageGroup) {
    const vaccineList = document.getElementById('vaccineList');
    vaccineList.innerHTML = "";

    if (vaccineData[ageGroup]) {
        vaccineData[ageGroup].forEach(vaccine => {
            const card = document.createElement('div');
            card.className = 'vaccine-card';
            card.innerHTML = `
                <h3><i class="fas fa-syringe"></i> ${vaccine}</h3>
                <p>Recommended for ages ${ageGroup}.</p>
            `;
            vaccineList.appendChild(card);
        });
    } else {
        vaccineList.innerHTML = "<p>No suggestions available for this age group.</p>";
    }
}

// Show vaccines for animal bites
function showAnimalVaccines(animalType) {
    const animalVaccineList = document.getElementById('animalVaccineList');
    animalVaccineList.innerHTML = "";

    if (animalVaccineData[animalType]) {
        animalVaccineData[animalType].forEach(vaccine => {
            const card = document.createElement('div');
            card.className = 'vaccine-card';
            card.innerHTML = `
                <h3><i class="fas fa-syringe"></i> ${vaccine}</h3>
                <p>Recommended for ${animalType} bites.</p>
            `;
            animalVaccineList.appendChild(card);
        });
    } else {
        animalVaccineList.innerHTML = "<p>No suggestions available for this animal type.</p>";
    }
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const vaccine = document.getElementById('vaccine').value;
    const date = document.getElementById('date').value;

    // Redirect to Google Calendar
    const eventDetails = {
        summary: `Vaccination: ${vaccine} for ${name}`,
        description: `Don't forget your vaccination appointment for ${vaccine} on ${date}.`,
        start: `${date}T09:00:00`,
        end: `${date}T10:00:00`
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.summary)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}`;
    window.open(googleCalendarUrl, '_blank');

    // Clear the form
    document.getElementById('bookingForm').reset();
});

// Google Maps Integration
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 28.6139, lng: 77.2090 }, // Default to New Delhi
        zoom: 12,
    });

    const marker = new google.maps.Marker({
        position: { lat: 28.6139, lng: 77.2090 },
        map: map,
        title: "Vaccination Center",
    });
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent. We will contact you shortly.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});