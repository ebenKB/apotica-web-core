(
  function (){
    const year = new Date().getFullYear();
    if(year >= 2019) {
      const ele = document.getElementById('current_year');
      if(ele != null) {
        ele.innerHTML = year;
      }
    }
    
    // fetch('http://worldclockapi.com/api/json/est/now')
    //   .then((res) => res.json())
    //   .then(data => {
    //     const currentYr = data.currentDateTime.split('-')[0];
    //     document.getElementById('current_year').innerHTML = currentYr;
    // });
  }
)();