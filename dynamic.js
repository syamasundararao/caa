    $(document).ready(function () {
        $.getJSON("data.json", function (data) {

            var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
            $.each(data, function (index, value) {
                arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
            });

            // EXTRACT VALUE FOR TABLE HEADER.
            var col = [];
            for (var i = 0; i < arrItems.length; i++) {
                for (var key in arrItems[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
					tableClass = "table table-hover";
					arr = table.className.split(" ");
							if (arr.indexOf(tableClass) == -1) 
							{
									table.className += " " + tableClass;
							}
							
							var thead=document.createElement("thead");
							table.appendChild(thead);
							headClass = "bg-primary";
							arr = thead.className.split(" ");
							if (arr.indexOf(headClass) == -1) 
							{
									thead.className += " " + headClass;
							}
								
							
            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
            var tr = table.insertRow(-1);                   // TABLE ROW.
			 
            for (var i = 0; i < col.length-1; i++) {
				
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
			thead.appendChild(tr);
				var tbody=document.createElement("tbody");
							table.appendChild(tbody);
							bodyClass = "";
							arr = tbody.className.split(" ");
							if (arr.indexOf(bodyClass) == -1) 
							{
									tbody.className += " " + bodyClass;
							}
								
				
				
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < arrItems.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length-1; j++) {
                    var tabCell = tr.insertCell(-1);
					 if(j==1)
					 {
							console.log(j);
							newlink = document.createElement('a');
//newlink.setAttribute('class', 'signature');
							newlink.innerHTML=arrItems[i][col[j]];
							newlink.setAttribute('href', arrItems[i][col[col.length-1]]);
							newlink.setAttribute('target', '_blank');

							tabCell.appendChild(newlink);
							//alert(tabCell.innerHTML);
							//tabCell.innerHTML = arrItems[i][col[j]];
						 
					 }
					 else
					//tabCell.appendChild(aTag);
                    tabCell.innerHTML = arrItems[i][col[j]];
                }
					
					
				//tr.appendChild(aTag);
				tbody.appendChild(tr);
				
            }
			

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        });
    });
