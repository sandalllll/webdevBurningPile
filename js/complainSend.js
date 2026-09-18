const csName = document.getElementById("complain-send-name");
const csText = document.getElementById("complain-send-text");
const csEmail = document.getElementById("complain-send-email");
const csResult = document.getElementById("complain-send-result");
const csButton = document.getElementById("complain-send-btn");


csButton.addEventListener("click", () => {
	if (csName.value.trim() == "")
	{
		csResult.innerText = "Так вы кто все таки?";
		return;
	}
	if (csText.value.trim() == "")
	{
		csResult.innerText = "Чего хотите то?";
		return;
	}
	if (csEmail.value.match(/@/g).length != 1)
	{
		csResult.innerText = "Куда отвечать то?";
		return;
	}
	
	
	modal.close();
	csName.value = "";
	csText.value = "";
	csEmail.value = "";
	csResult.innerText = "";
});