var startnum = 2;
var turn = 1;
document.getElementById("myRange").addEventListener("change",
  function () {
    startnum = document.getElementById("myRange").value;
  });








document.getElementById("start").addEventListener("click", function () {
  document.getElementById("titlepage").style.display = "none"; $("#titlepage").remove();
  for (i = 0; i < startnum; i++) {
    document.getElementById("turnco").innerText = `turn : ${turn} Player 1's move`;
    var child = document.createElement("DIV");
    child.id = $(".circle").length + 1;
    child.classList.add("circle");
    child.setAttribute("data-con", "0");
    child.style.left = `${Math.floor(Math.random() * 300) + 100}px`;
    child.style.top = `${Math.floor(Math.random() * 200) + 200}px`;
    console.log(child.style.top);
    document.body.appendChild(child);


  }

  for (i = 1; i < document.getElementsByClassName("circle").length + 1; i++) {
    addlist(i);
  }

})
document.getElementById("rules").addEventListener("click", function () { document.getElementById("titlepage").innerText = "From Wikipedia: The game is played by two players, starting with a few spots drawn on a sheet of paper. Players take turns, where each turn consists of drawing a line between two spots (or from a spot to itself) and adding a new spot somewhere along the line. The players are constrained by the following rules. The line may be straight or curved, but must not touch or cross itself or any other line. The new spot cannot be placed on top of one of the endpoints of the new line. Thus the new spot splits the line into two shorter lines. No spot may have more than three lines attached to it. For the purposes of this rule, a line from the spot to itself counts as two attached lines and new spots are counted as having two lines already attached to them" })
document.getElementById("about").addEventListener("click", function () { document.getElementById("titlepage").innerText = "Sprouts is a game that can be enjoyed simply by both adults and children because the intial setupof the game is so simple. Yet it also can be analyzed for its significant mathematical properties. It was invented by mathematicians John Horton Conway and Michael S. Paterson at Cambridge University in the early 1960s. " })






const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function (e) {
  getCursorPosition(canvas, e)
})

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log("x: " + x + " y: " + y);

  if ($("[data-checked='true']").length == 2) {
    var x1 = $("[data-checked='true']")[0].style.left.substring(0, $("[data-checked='true']")[0].style.left.indexOf("p"));
    var x2 = $("[data-checked='true']")[1].style.left.substring(0, $("[data-checked='true']")[1].style.left.indexOf("p"));
    var y1 = $("[data-checked='true']")[0].style.top.substring(0, $("[data-checked='true']")[0].style.top.indexOf("p"));
    var y2 = $("[data-checked='true']")[1].style.top.substring(0, $("[data-checked='true']")[1].style.top.indexOf("p"));
    console.log(`${x1} ${y1} ${x2} ${y2}`)
    var newposx = (Number(x1) + Number(x2) + Math.random() * 100) / 2;
    var newposy = (Number(y1) + Number(y2) + Math.random() * 100) / 2;
    var child = document.createElement("DIV");
    child.id = $(".circle").length + 1;
    child.classList.add("circle");
    child.setAttribute("data-con", "2");
    child.style.left = `${x}px`;
    child.style.top = `${y}px`
    document.body.appendChild(child);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1 / (10 / 3), y1 / (10 / 3));
    ctx.lineTo(x / (10 / 3), y / (10 / 3));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x / (10 / 3), y / (10 / 3));
    ctx.lineTo(x2 / (10 / 3), y2 / (10 / 3));
    ctx.stroke();
    $("[data-checked='true']")[1].setAttribute("data-con", Number($("[data-checked='true']")[1].getAttribute("data-con")) + 1);
    $("[data-checked='true']")[0].setAttribute("data-con", Number($("[data-checked='true']")[0].getAttribute("data-con")) + 1);

    $("[data-checked='true']")[0].style.backgroundColor = "#555";
    $("[data-checked='true']")[1].style.backgroundColor = "#555";
    $("[data-checked='true']")[0].setAttribute("data-checked", "false");
    $("[data-checked='true']")[0].setAttribute("data-checked", "false");
    addlist($(".circle").length);
    for (i = 1; i < document.getElementsByClassName("circle").length + 1; i++) {
      recolor(i);
    }
    turn++;
    if (turn % 2 == 0) {
      document.getElementById("turnco").innerText = `turn : ${turn} Player 1's move`;
    } else {
      document.getElementById("turnco").innerText = `turn : ${turn} Player 2's move`;
    }
  }
  if ($("[data-checked='true']").length == 1 && $("[data-checked='true']")[0].style.backgroundColor == "blue") {
    var x1 = $("[data-checked='true']")[0].style.left.substring(0, $("[data-checked='true']")[0].style.left.indexOf("p"));
    var y1 = $("[data-checked='true']")[0].style.top.substring(0, $("[data-checked='true']")[0].style.top.indexOf("p"));

    var child = document.createElement("DIV");
    child.id = $(".circle").length + 1;
    child.classList.add("circle");
    child.setAttribute("data-con", "2");
    child.style.left = `${x}px`;
    child.style.top = `${y}px`
    document.body.appendChild(child);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    console.log(`${x1} ${y1}`);
    ctx.beginPath();
    ctx.moveTo(x1 / (10 / 3) + 5, y1 / (10 / 3) + 5);
    ctx.lineTo(x / (10 / 3) + 5, y / (10 / 3) + 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x1 / (10 / 3), y1 / (10 / 3));
    ctx.lineTo(x / (10 / 3), y / (10 / 3));
    ctx.stroke();
    $("[data-checked='true']")[0].setAttribute("data-con", Number($("[data-checked='true']")[0].getAttribute("data-con")) + 2);
    $("[data-checked='true']")[0].style.backgroundColor = "#555";
    $("[data-checked='true']")[0].setAttribute("data-checked", "false");
    addlist($(".circle").length);
    for (i = 1; i < document.getElementsByClassName("circle").length + 1; i++) {
      recolor(i);
    }
    turn++;
    if (turn % 2 == 0) {
      document.getElementById("turnco").innerText = `turn : ${turn} Player 1's move`;
    } else {
      document.getElementById("turnco").innerText = `turn : ${turn} Player 2's move`;
    }
  }
  for (i = 0; i < document.getElementsByClassName("circle").length; i++) {
    if (document.getElementsByClassName("circle")[i].getAttribute("data-con") > 2) {
      document.getElementsByClassName("circle")[i].style.backgroundColor = "red";
    }

  }
  wincheck();

}






function addlist(i) {

  document.getElementById(i).addEventListener("click",
    function () {
      if (document.getElementById(i).style.backgroundColor != "red") {

        console.log(document.getElementById(i).style.backgroundColor);
        console.log(document.getElementById(i).style.backgroundColor == "green");
        if (document.getElementById(i).style.backgroundColor == "green" && document.getElementById(i).getAttribute("data-con") < 2) {
          document.getElementById(i).style.backgroundColor = "blue";



        }


        if (document.getElementById(i).style.backgroundColor != "blue") {
          document.getElementById(i).style.backgroundColor = "green";
        }
        document.getElementById(i).setAttribute("data-checked", "true")
      }

    })




}



function wincheck() {
  var row = $("div").filter(function () {
    // Chrome returns "rgb(255, 102, 0)" instead of "#FF6600"
    return $(this).css('background-color') !== "rgb(255, 0, 0)";
  });
  if (row.length == 1 && row[0].getAttribute("data-con") > 1) {
    if (turn % 2 == 1) {
      alert(`gameover player 1 won`)
    } else {
      alert(`gameover player 2 won`)
    }
  }
  if (row.length == 0) {
    if (turn % 2 == 1) {
      alert(`gameover player 1 won`)
    } else {
      alert(`gameover player 2 won`)
    }

  }

}




function recolor(i) {
  if (document.getElementById(i).style.backgroundColor != "red") {

    if (document.getElementById(i).getAttribute("data-con") == 0) {
      document.getElementById(i).style.backgroundColor = "grey"
    } else if (document.getElementById(i).getAttribute("data-con") == 1) {
      document.getElementById(i).style.backgroundColor = "orange"
    } else if (document.getElementById(i).getAttribute("data-con") == 2) {
      document.getElementById(i).style.backgroundColor = "yellow"
    }

  }
}