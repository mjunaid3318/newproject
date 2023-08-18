fetch("http://localhost:3000/products")
.then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.description +"</td>";
            temp += "<td>" + itemData.price +"</td>";
            temp += "<td>" + itemData.category +"</td>";
            temp += "<td>" + itemData.inventory +"</td>";
            "</tr>";
            
          });
          document.getElementById('data').innerHTML = temp;
          
        }
      }
    )
  }
)

