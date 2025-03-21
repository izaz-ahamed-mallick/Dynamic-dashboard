export const extractNameFromEmail = (email: string) => {
    if (!email || !email.includes("@")) return "";

    const namePart = email.split("@")[0];
    const name = namePart
        .split(".") // Handle emails with dots (e.g., john.doe)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" "); // Join names with space

    return name;
};
