themeCheckbox = document.getElementById("theTheme");

themeCheckbox.addEventListener("change", function()
{
    if (this.checked == true)
	{
		$("html").attr('data-theme', "dark");
		document.cookie = "d";
    }
	else
	{
		$("html").attr('data-theme', "bright");
		document.cookie = "b";
	}
});

if (document.cookie == "d")
{
	$("html").attr('data-theme', "dark");
	themeCheckbox.checked = true;
}