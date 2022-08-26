


/**
 * Saves a string to the clipboard.
 * @param {string} text What text will be saved to the clipboard.
 */
function copyText(text)
{
    // Create a new element and set string as value
    let textArea = document.createElement("textarea");
    textArea.id = "copy-area";  // Used for styling
    textArea.value = text;

    // Select and copy value
    textArea.select();
    textArea.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textArea.value);
    textArea.remove();  // Delete the element; might be unnecessary
}



/* REFERENCES
https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

*/

/* TASK LIST, IGNORE
DONE: Create an HTML page called index.html.
TODO: On this page add any elements you would like to create a webpage that acts as an online CV. This is your personal webpage, so feel free to customise
it to suit your needs but make sure that you include at least the following:
    - A short bio. Add a short (no more than about three paragraphs) description of yourself. Who are you?
        What is your experience? What are your passions? What motivates you? What is it that you would most like to do? Etc.
    DONE- Your contact details. E.g. name, contact number, email address, links to any of your (professional) social media including Linkedln. TODO:An image of yourself.
    DONE- A list of your skills and competencies.
    DONE- Describe your education.
    DONE- Describe your work experience.
    - As you progress through this course you can keep adding to this personal webpage. For example, in the near future, you can describe
        some projects that you have worked on and add links to the code (in GitHub).
    - Add links to any blog posts or articles that you have written.

TODO: Use CSS to style and position the elements on your webpage as attractively as possible. Feel free to use style libraries like Bootstrap.
TODO: Create a new repository for this task called MyCV.
TODO: Following the steps in Compulsory Task 1, deploy your webpage using GitHub Pages.
TODO: Add the index.html file from this task into this task's folder as well as a screenshot of your deployed webpage.

*/