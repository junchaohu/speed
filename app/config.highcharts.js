Highcharts.theme = {
	// colors:['#01A4CD','#25C43F','#E07326','#E0F300','#0CD7E8','#34EB7E','#FFAC62','#FFF570','#39FACA','#87E6FF'], //skin1-g
	// colors:['#049FDC','#43C166','#E96D46','#E9F200','#1DD4F0','#55EAA0','#FFA788','#FFF494','#5BFADB','#A5E4FF'], //skin2-g
	colors:['#3e85ae','#e88c77','#63b2aa'], //skin3-g,'#E1F300','#0ED8ED','#38EC94','#FFAE7B','#FFF588','#3EFBD5','#8BE6FF'
	//colors : ['#1abc9c', '#f1c40f', '#2ecc71', '#e67e22', '#3498db', '#e74c3c', '#9b59b6', '#95a5a6', '#34495e'], //flat colors
	// colors: ['#4572A7','#AA4643','#89A54E','#80699B','#3D96AE','#DB843D','#92A8CD','#A47D7C','#B5CA92'], //default
	// colors:['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263','#6AF9C4'],
	tooltip : {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	chart:{
		// height:300
	},
	yAxis : {
		//min : 0,
		//startOnTick : false,
		title : {
			text : null
		},
		//showLastLabel:true,
	},
	title:{
		text:null
	},
	legend:{
		enabled:true,
		//maxHeight:60,
		//labelFormatter:function(){return this.name.substring(0,50);}
	}
};
Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions({
	global : {
		useUTC : false,
		//timezoneOffset: 0,
	},
	credits : {
		enabled : false
	},

}); 