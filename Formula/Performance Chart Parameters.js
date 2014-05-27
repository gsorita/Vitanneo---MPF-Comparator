function main() {
return "http://chart.googleapis.com/chart?" + 
"cht=lc&" + 									//chart type
"chd=t:{!R182293.cdy#value}" + get_cdy() + 		//chart data string
"&chds=a" + 									//scale for text
"&chs=800x350" +								//chart size
"&chxs=0N*scUSD,000000,20,0,lt,000000,000000|1N*scUSD,000000,20,0,lt,000000,000000"	+	//axis label styles
"&chm=B,bfbfbf,0,0,0|B,bfbfbf,0,0,0" + 			//shape marker
"&chxt=x,y" + 									//visible axes
"&chl={!R182293.cdx2#value}" + 					//pie chart labels
"&chls=1|3,6,3" + 								//line styles
"&chdlp=b" + 									//chart legend text and style
"&chma=0,0,0,0" +								//chart margins
"&chco=bfbfbf,0000FF" + 						//series colors
"&chdls=000000,7" + 							//chart legend text and style
"&chxr=1,{!min_monthly_return#value},{!max_monthly_return#value}&" + 					//axis ranges
"chds={!min_monthly_return#value},{!max_monthly_return#value}"; 						//scale for text format with custom range
}

function get_cdy() {
	if ("{!R182293._cdy#value}" != "100") { 
		return '|{!R182293._cdy#value}'; 
	} else { 
		return ''; 
	}
} 

main();