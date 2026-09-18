const closeOpenNavButton = document.getElementById("navigation-btn");
let navButtons = [];
for (let i = 0; i < 4; i++)
{
	navButtons[i] = document.getElementById("nav-btn-"+i);
}

let hiddn = false;

closeOpenNavButton.addEventListener("click", () => {
	for (let i = 0; i < 4; i++)
	{
		navButtons[i].hidden = hiddn;
	}
	hiddn = !hiddn;
});