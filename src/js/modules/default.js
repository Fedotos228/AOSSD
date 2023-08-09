const copyrightElements = document.querySelectorAll('.copyright time');

if (copyrightElements.length > 0) {
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach((element) => {
        const existingYear = parseInt(element.textContent);
        if (existingYear !== currentYear) {
            element.textContent = currentYear;
        }
    });
}
