const ids = ['explore', 'discover', 'unevil'];
let ind = 0;
export default function updateText() {
    const currentId = ids[ind];

    // Remove classes from all spans
    const spans = document.querySelectorAll("#explore, #discover, #unevil");
    spans.forEach((span) => {
        span.classList.remove(
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-pink-500",
            "to-violet-500",
            "bg-yellow-500",
            "bg-red-500",
            "bg-green-500",
            "text-white",
            'transition-all',
            "duration-300",
            "ease-in-out"
        );
    });

    // Add classes to current span based on its ID
    const currentSpan = document.getElementById(currentId);
    if (currentSpan && currentId === "explore") {
        currentSpan.classList.add(
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-pink-500",
            "to-violet-500",
            'transition-all',
            "duration-300",
            "ease-in-out"

        );
    } else if (currentSpan && currentId === "discover") {
        currentSpan.classList.add(
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-amber-600",
            'transition-all',
            "to-red-600",
            "duration-300",
            "ease-in-out"

        );
    } else if (currentSpan && currentId === "unevil") {
        currentSpan.classList.add(
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-pink-500",
            "to-violet-500",
            'transition-all',
            "duration-300",
            "ease-in-out"

        );
    }

    ind = (ind + 1) % 3;
}