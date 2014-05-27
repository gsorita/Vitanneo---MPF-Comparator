function main() {
	var chartURL = "https://chart.googleapis.com/chart?" +
	"cht=p" + //Chart type = pie
	"&chd={!asset_allocation_chart_values#value}" + //Chart values
	"&chs=500x500" + //Chart size
	"&chdls=000000,6" + //Shading Control
	"&chds=a" + //Auto Scaling
	"&chco={!asset_allocation_chart_colors#value}"; //Chart colors
	
	return chartURL;
} main();