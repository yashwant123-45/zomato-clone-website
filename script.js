document.addEventListener("DOMContentLoaded", () => {
    console.log("🍽️ Zomato App Loaded - Enjoy discovering great food!");

    const input = document.querySelector(".sc-dBfaGr");

    // Placeholder hint list
    const placeholderHints = [
        "Search for pizza, biryani, burgers...",
        "Try Patna's top-rated restaurants!",
        "Find deals on your favorite meals...",
        "Explore cuisines like Chinese, South Indian, and more..."
    ];

    let currentIndex = 0;

    // Change placeholder every 3 seconds
    setInterval(() => {
        input.placeholder = placeholderHints[currentIndex];
        currentIndex = (currentIndex + 1) % placeholderHints.length;
    }, 3000);

    // Add box-shadow on focus
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 10px rgba(255, 63, 108, 0.7)";
        input.style.transition = "box-shadow 0.3s ease";
    });

    // Remove box-shadow on blur
    input.addEventListener("blur", () => {
        input.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
    });

    // Optional: Handle enter key
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            alert(`🔍 Searching for: ${input.value}`);
            // You could redirect or call a search API here
        }
    });
});
