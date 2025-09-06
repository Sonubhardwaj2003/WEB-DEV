class AuthService {
    #token;

    constructor() {
        this.#token = null;
    }

    // Abstracted method – user only needs to call this
    login(username, password) {
        if (username === "admin" && password === "1234") {
            this.#token = "abc123xyz"; // pretend we got this from a server
            return "Login successful!";
        } else {
            return "Invalid credentials.";
        }
    }

    // Public method hides token handling
    getAccess() {
        if (this.#token) {
            return "Access granted.";
        }
        return "Access denied. Please log in.";
    }
}

let user = new AuthService();
console.log(user.getAccess());        // Access denied. Please log in.
console.log(user.login("admin", "1234")); // Login successful!
console.log(user.getAccess());        // Access granted.