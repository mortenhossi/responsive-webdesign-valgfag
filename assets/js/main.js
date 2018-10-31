function orderFood() {
  let orderPris = 0;

  $(".plusbtn").each(function() {
    $(this).on("click", function() {
      let startCount = parseInt($(this).parent().prev().children().html());
      startCount++;
      console.log(startCount);
      $(this).parent().prev().children().html(startCount);
      // få fat i prisen på den bestilling man har trykket på
      let orderCostString = $(this).closest(".order-box").children().eq(1).children().text();
      // lav string om til number
      let orderCost = parseInt(orderCostString);
      // læg nummer til orderPris
      orderPris += orderCost;
      $(".pris").html(" DKK " + orderPris);
    });

  });

  $(".minusbtn").each(function() {
    $(this).on("click", function() {
      // få fat i antal og lav det om til nummer
      let count = parseInt($(this).parent().prev().children().html());
      // tjek om antal er over 0, hvis det er så decrement
      if (count > 0) {
        count--;
        // sæt prisen til den nye count
        $(this).parent().prev().children().html(count);
        // få fat i prisen på den bestilling man har trykket på
        let orderCostString = $(this).closest(".order-box").children().eq(1).children().text();
        // lav string om til number
        let orderCost = parseInt(orderCostString);
        orderPris -= orderCost;
        $(".pris").html(" DKK " + orderPris);
      }
    });
  });
}
