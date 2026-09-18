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
	
	{
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "https://reqbin.com/echo/post/json");//test
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onload = () => console.log(xhr.responseText);

		let data = {
		  "name": csName.value.trim(),
		  "text": csText.value.trim(),
		  "email": csEmail.value.trim(),
		};

		xhr.send(JSON.stringify(data));
	}
	
	modal.close();
	csName.value = "";
	csText.value = "";
	csEmail.value = "";
	csResult.innerText = "";
});