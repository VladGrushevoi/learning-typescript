const Todos = [
    {
        Tittle: "Shop",
        Description: "Buy bread",
        isDone: false,
        isEditing: false,
    },
    {
        Tittle: "Shop",
        Description: "Buy milk",
        isDone: false,
        isEditing: false,
    },
    {
        Tittle: "Shop",
        Description: "Buy chocolate",
        isDone: false,
        isEditing: false,
    },
];
let form = document.getElementById("form");
form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(form);
    console.log(formData.values());
    return false;
};
//# sourceMappingURL=app.js.map