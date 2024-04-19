document.addEventListener("DOMContentLoaded", () => {
    // 🌻: Corrected ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🌻: Corrected element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🌻: Added 'async" which was missing from JS concepts
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🌻: Corrected the function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🌻: Asynchronous function 
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
            const response = await fetch('directions.json');
            const directions = await response.json();
            const message = await navigateLabyrinth(directions);
            
            // 🌻: Corrected the method
            document.getElementById("room3Result").textContent = message;
        } catch (error) {
            console.error("This is an error", error)
        }   
    });
});

function findMostRecentBook(books) {
    // 🌻: Fixed the Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🌻: Correct logic
    const intersection = new Set();
    for (const arrayElement of setA) {
        if (setB.has(arrayElement)) {
            intersection.add(arrayElement)
        }
    }
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🌻: Added a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

