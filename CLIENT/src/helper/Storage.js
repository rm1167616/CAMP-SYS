// COOKIES, LOCAL STORAGE
/* This approach ensures persistent user sessions across page reloads (until the user logs out or the data is manually cleared).*/

export const setAuthUser = (data) => {
    // save object to the browser's local storage
    /*Stringify OBJECT TO TEXT (because localStorage can only store strings) 
    and saves it under the key "user"*/
    localStorage.setItem("user", JSON.stringify(data));
};
    
    export const getAuthUser = (data) => {
        // This function retrieves the saved user data from localStorage by checking the "user" key
        if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
        }
};

    export const removeAuthUser = () => {
        // This function removes the user data from localStorage, effectively "logging out" the user.
        if (localStorage.getItem("user")) localStorage.removeItem("user");
    };
