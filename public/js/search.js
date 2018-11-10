for (i in isoCountries) {
    //console.log(isoCountries[i]);
    //console.log(i);
  
    let option1 = $("<option value=" + i + ">" + isoCountries[i] + "</option>");
  
    $("#browsers").append(option1);
  
  }


  let countryCode1 = "",
  queryURL = "",
  savedSearch = {};


  $(document).ready(() => {
  
    $("#fixed-header-drawer-exp").keyup((event) => {
  
  
  
      console.log(this);
  
  
  
      let keycode = (event.keyCode ? event.keyCode : event.which);
  
  
  
      if (keycode == '13') {
        countryCode1 = $("#fixed-header-drawer-exp").val().toLowerCase();
        console.log(countryCode1);
  
        queryURL = "http://inqstatsapi.inqubu.com/?api_key=01af562d77e556bb&data=medianwage,jobless_rate,bigmac_index,gini,life_expectancy,murder_rate,death_rate,happiness_index,corruption_index,literacy_rate,tax_revenue_total,median_age&countries=" + countryCode1;
  
        console.log(queryURL);
  
        if (countryCode1 === "") {
          $("#modalText").text("Data is unavailible for the country you requested.");
          $("#myModal").modal("show");
  
        } else {

          $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json",
            //contentType: "application/x-www-form-urlencoded"
            headers: {"Content-Type" : "application/x-www-form-urlencoded"}
          }).then(function (res) {
            console.log(res);
  
            if (typeof res === "string") {
              $("#modalText").text("Data is unavailible for the country you requested.");
              $("#myModal").modal("show");
            } else {
  
              $(".trows").text("");
  
              $("#results").modal("show")
  
  
              $("table").removeClass("hidden");
  
              $(".country1").text(res[0].countryName);
  
              JSON.stringify(res[0].medianwage) === "[]" ? $(".wages1").text("N/A") : $(".wages1").text("$" + res[0].medianwage[0].data);
  
              JSON.stringify(res[0].jobless_rate) === "[]" ? $(".unemployment1").text("N/A") : $(".unemployment1").text(res[0].jobless_rate[0].data + "%");
  
              JSON.stringify(res[0].bigmac_index) === "[]" ? $(".bigMac1").text("N/A") : $(".bigMac1").text(res[0].bigmac_index[0].data);
  
              JSON.stringify(res[0].gini) === "[]" ? $(".gini1").text("N/A") : $(".gini1").text(res[0].gini[0].data);
  
              JSON.stringify(res[0].life_expectancy) === "[]" ? $(".lifeExpetancy1").text("N/A") : $(".lifeExpetancy1").text(res[0].life_expectancy[0].data);
  
              JSON.stringify(res[0].murder_rate) === "[]" ? $(".murderRate1").text("N/A") : $(".murderRate1").text(res[0].murder_rate[0].data);
  
              JSON.stringify(res[0].death_rate) === "[]" ? $(".deathRate1").text("N/A") : $(".deathRate1").text(res[0].death_rate[0].data);
  
              JSON.stringify(res[0].happiness_index) === "[]" ? $(".happiness1").text("N/A") : $(".happiness1").text(res[0].happiness_index[0].data);
  
              JSON.stringify(res[0].corruption_index) === "[]" ? $(".corruption1").text("N/A") : $(".corruption1").text(res[0].corruption_index[0].data);
  
              JSON.stringify(res[0].literacy_rate) === "[]" ? $(".literacyRate1").text("N/A") : $(".literacyRate1").text(res[0].literacy_rate[0].data + "%");
  
              JSON.stringify(res[0].tax_revenue_total) === "[]" ? $(".taxes1").text("N/A") : $(".taxes1").text("$" + res[0].tax_revenue_total[0].data);
  
              JSON.stringify(res[0].median_age) === "[]" ? $(".medianAge1").text("N/A") : $(".medianAge1").text(res[0].median_age[0].data);
  
              $("#save").removeClass("hidden");
  
              savedSearch = {
                countryName: res[0].countryName,                
                medianwage: JSON.stringify(res[0].medianwage) === "[]" ? "N/A" : "$" + res[0].medianwage[0].data,
                jobless_rate: JSON.stringify(res[0].jobless_rate) === "[]" ? "N/A" : res[0].jobless_rate[0].data + "%",
                bigmac_index: JSON.stringify(res[0].bigmac_index) === "[]" ? "N/A" : res[0].bigmac_index[0].data,
                gini: JSON.stringify(res[0].gini) === "[]" ? "N/A" : res[0].gini[0].data,
                life_expectancy: JSON.stringify(res[0].life_expectancy) === "[]" ? "N/A" : res[0].life_expectancy[0].data,
                murder_rate: JSON.stringify(res[0].murder_rate) === "[]" ? "N/A" : res[0].murder_rate[0].data,
                death_rate: JSON.stringify(res[0].death_rate) === "[]" ? "N/A" : res[0].death_rate[0].data,
                happiness_index: JSON.stringify(res[0].happiness_index) === "[]" ? "N/A" : res[0].happiness_index[0].data,
                corruption_index: JSON.stringify(res[0].corruption_index) === "[]" ? "N/A" : res[0].corruption_index[0].data,
                literacy_rate: JSON.stringify(res[0].literacy_rate) === "[]" ? "N/A" : res[0].literacy_rate[0].data + "%",
                tax_revenue_total: JSON.stringify(res[0].tax_revenue_total) === "[]" ? "N/A" : "$" + res[0].tax_revenue_total[0].data,
                median_age: JSON.stringify(res[0].median_age) === "[]" ? "N/A" : res[0].median_age[0].data
                
              }
            }
  
          })
        }
        event.stopPropagation();
      }
  
    });
  
  
  
  
    $("#save").on('click', event => {   
      event.preventDefault(); 
      
                  $.post("api/examples", {
                    countryName: savedSearch.countryName,
                    medianwage: savedSearch.medianwage,
                    bigmac_index: savedSearch.bigmac_index,
                    gini: savedSearch.gini,
                    life_expectancy: savedSearch.life_expectancy,
                    murder_rate: savedSearch.murder_rate,
                    death_rate: savedSearch.death_rate,
                    happiness_index: savedSearch.happiness_index,
                    corruption_index: savedSearch.corruption_index,
                    literacy_rate: savedSearch.literacy_rate,
                    tax_revenue_total: savedSearch.tax_revenue_total,
                    median_age: savedSearch.median_age
                  })
                          .then(data => {
      
                              if (data) {
                                  console.log("Posted!");
                                  location.reload();
                              }
                          });
                          
  
      console.log("Saved Search to api");
      
    })
  
  })