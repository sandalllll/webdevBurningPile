$.getJSON('data/portfolio.json', function(data) {
    let prt = document.getElementById("portfolioContainer");
	$.each(data, function(i, work)
	{
		const div = document.createElement("div");
		div.innerHTML += (work.file.endsWith("png") ? ('<img src="images/' + work.file + '" alt="First Garphics Engine" class="preview"><br>') :
		('<video autoplay loop muted playsinline class="preview"><source src="images/' + work.file + '" type="video/mp4">Your browser does not support the video tag.</video><br>'));
		span = document.createElement("span");
		span.innerText += work.text;
		div.appendChild(span);
		prt.appendChild(div);
	});
});