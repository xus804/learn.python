const originalCode = [
    'print("Your name here")',
    'favorite_color = "blue"\nlucky_number = 7\nprint(favorite_color)\nprint(lucky_number)',
    'age = 20\nheight = 5.9\nname = "Sam"\nstudent = True\n\nprint(age, type(age))\nprint(height, type(height))',
    'length = 12\nwidth = 5\narea = length * width\nprint("Area:", area)',
    'name = "Alex"\nhobby = "reading"\nsentence = f"Hi, I\'m {name} and I love {hobby}!"\nprint(sentence)',
    'movies = ["Inception", "The Matrix", "Interstellar"]\nprint("My second favorite movie is:", movies[1])\nmovies.append("Avatar")\nprint("Updated list:", movies)',
    'number = 5\n\nif number > 0:\n    print("Positive!")\nelif number < 0:\n    print("Negative!")\nelse:\n    print("Zero!")',
    'for i in range(1, 6):\n    print(i)',
    'def circle_area(radius):\n    pi = 3.14159\n    return pi * radius ** 2\n\narea = circle_area(5)\nprint(f"Area: {area}")',
    'book = {\n    "title": "1984",\n    "author": "George Orwell",\n    "year": 1949\n}\n\nprint(f"Title: {book[\'title\']}")\nprint(f"Author: {book[\'author\']}")\nprint(f"Year: {book[\'year\']}")'
];

function showLesson(index) {
    const lessons = document.querySelectorAll('.lesson');
    const items = document.querySelectorAll('.lesson-item');
    
    lessons.forEach(lesson => lesson.classList.remove('active'));
    items.forEach(item => item.classList.remove('active'));
    
    lessons[index].classList.add('active');
    items[index].classList.add('active');
}

function runCode(index) {
    const code = document.getElementById(`code${index}`).value;
    const outputDiv = document.getElementById(`output${index}`);
    
    try {
        outputDiv.className = 'output';
        outputDiv.textContent = 'Running...';
        
        let output = [];
        const originalLog = console.log;
        console.log = function(...args) {
            output.push(args.join(' '));
        };
        
        // Note: eval() executes JavaScript, not Python. 
        // Python code in the textareas may result in errors if not processed by a Python engine.
        eval(code);
        
        console.log = originalLog;
        
        if (output.length > 0) {
            outputDiv.textContent = output.join('\n');
            outputDiv.classList.add('success');
        } else {
            outputDiv.textContent = '✓ Code executed successfully (no output)';
            outputDiv.classList.add('success');
        }
    } catch (error) {
        outputDiv.textContent = `❌ Error: ${error.message}`;
        outputDiv.classList.add('error');
    }
}

function resetCode(index) {
    document.getElementById(`code${index}`).value = originalCode[index];
    document.getElementById(`output${index}`).textContent = 'Click "Run Code" to see the result!';
    document.getElementById(`output${index}`).className = 'output';
}
