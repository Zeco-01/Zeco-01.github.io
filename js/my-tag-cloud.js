var entries = [];
var links = document.getElementById("mytagcloud").childNodes;
console.log(links);
for (var i=0;i<links.length;i++){

	if (links[i].nodeType == 1){
		entries.push({
			label: links[i].text,
			url: links[i].getAttribute('href'),
			target: '_top'
		});
	}
	
}
            
var settings = {

                entries: entries,
                width: 230,
                height: 200,
                radius: '65%',
                radiusMin: 75,
                bgDraw: true,
                bgColor: '#444',
                opacityOver: 1.00,
                opacityOut: 0.05,
                opacitySpeed: 6,
                fov: 800,
                speed: 1.5,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '15',
                fontColor: '#fff',
                fontWeight: 'normal',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: false

            };

$('#mytagcloud').svg3DTagCloud(settings);
