let form : HTMLFormElement | null = document.getElementById("form") as HTMLFormElement;

form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(form)
    console.log(formData.values());
    return false; 
}

