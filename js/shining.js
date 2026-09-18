let sectors = [];
sectors[0] = document.getElementById("headerS");
sectors[1] = document.getElementById("oboMnye");
sectors[2] = document.getElementById("haviky");
sectors[3] = document.getElementById("primeriRABot");
sectors[4] = document.getElementById("kontakty");
sectors[5] = document.getElementById("footerS");
let shiningAt = 0;

document.addEventListener("scroll", (event) => {
	let switchTo = 0;
	for (let i = 0; i < 6; i++)
	{
		const rect = sectors[i].getBoundingClientRect();
		if ((window.innerHeight - rect.top) < window.innerHeight)
		{
			switchTo = i;
			break;
		}
	}
	if (shiningAt != switchTo)
	{
		sectors[shiningAt].style.backgroundColor = "";
		shiningAt = switchTo;
		sectors[shiningAt].style.backgroundColor = "Yellow";
	}
})