
$ ->
  $("#address_zipcode").jpostal({
    postcode : [ "#address_zipcode" ],
    address  : {
                  "#address_prefecture_code" : "%3",
                  "#address_city"            : "%4",
                  "#address_street"          : "%5%6%7"
                }
  })