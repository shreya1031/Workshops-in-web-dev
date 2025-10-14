function accordionClick(target)
{
    console.log("Open");
    console.log(target);

    const sections = document.getElementsByClassName("accordion-section");
    
    for(let i = 0; i < sections.length; i++)
        {
        sections[i].style.contentVisibility = "hidden";
    }

    const section = document.getElementById(target);
    section.style.contentVisibility = "visible";





 /*   if (section.style.display === "block") {
        // If currently visible, hide it
        section.style.display = "none";
        console.log(target + " is now hidden");
    } else {
        // If currently hidden, show it
        section.style.display = "block";
        console.log(target + " is now visible");
    }
*/
}