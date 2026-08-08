//--------------Form_validation---------------//

    function form_validation() {

        const form = document.getElementById("form");
        const name = document.getElementById("N").value;
        const email = document.getElementById("E").value;


        let valid = true;
        let namecheck = !isNaN(name);

        if (namecheck)  {
            document.getElementById("err_N").innerHTML = "<p>Please enter valid name</p>";
            valid = false;

        }

        if (!email.includes("@") || !email.includes(".")) {
            document.getElementById("err_E").innerHTML = "<p>Please enter valid email</p>";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
            return false
        }
        
    return true;
    }

// --- Side Nav Toggle Script ---//
        const toggleBtn = document.getElementById('navToggleBtn');
        const sideMenu = document.getElementById('sideMenu');

        toggleBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            toggleBtn.textContent = sideMenu.classList.contains('active') ? '>' : '<';
        });

        // --- Automatic Image Slider Script ---
        const track = document.getElementById('sliderTrack');
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;

        function slideToNextImage() {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(slideToNextImage, 4000); // Cycles every 4 seconds

// DOM Manipulation for Interactive Hover Effects
        const ytBtn = document.getElementById('ytBtn');
        const mapContainer = document.getElementById('mapContainer');

        // Glowing Hover Effect for YouTube Button
        ytBtn.addEventListener('mouseenter', () => {
            ytBtn.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.5)';
        });

        ytBtn.addEventListener('mouseleave', () => {
            ytBtn.style.boxShadow = 'none';
        });

        // Interactive Map Box Shadow Highlight
        mapContainer.addEventListener('mouseenter', () => {
            mapContainer.style.boxShadow = '0 8px 24px rgba(214, 0, 0, 0.5)';
        });

        mapContainer.addEventListener('mouseleave', () => {
            mapContainer.style.boxShadow = '0 4px 16px rgba(214, 0, 0, 0.25)';
        });
