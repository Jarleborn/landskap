const getter = {

  answers: new Array(),
  lskap: null,
  getLskap: function () {
    fetch('/lsakp', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      getter.correct(data);
    }).catch(function(err) {
      console.log(err);
    });
  },
  init: function () {
    getter.initSearch();
    document.querySelector('#start').addEventListener('click', function () {
      document.querySelector('.instruk').style.display = 'none';
      document.querySelector('.game').style.display = 'block';
      setTimeout(function(){
        const info = document.querySelector('#infoText')
        info.textContent = "Nu är det bara 10 sekunder kvar";
        info.style.color = "red"
      }, 2900);
      setTimeout(function(){
        getter.getLskap()
      }, 3000);

    })
  },
  initSearch: function () {
    document.getElementById("search").addEventListener("keypress", function (e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        getter.print();
      }
    });
  },

  print: function () {
    let input = document.querySelector('#search').value
    input = input.charAt(0).toUpperCase() + input.slice(1);
    const textN = document.createTextNode(input);
    const list = document.querySelector('.collection')
    const liTag = document.createElement("li");
    liTag.className = "collection-item";
    liTag.appendChild(textN)
    list.style.display = 'block';
    if (!getter.answers.includes(input)) {
        getter.answers.push(input)
    } else {
        liTag.classList.add('cheater')
    }
    list.appendChild(liTag);

    document.querySelector('#search').value = ""
  },

  correct: function (facit) {
    document.querySelector('#search').style.display = "none"
    document.querySelector('#col').style.display = "none"
    let counter = 0;
    const answers = getter.answers;
    console.log(facit)

    for (var i = 0; i < answers.length; i++) {

        console.log(facit.indexOf(answers[i]))
        if(facit.indexOf(answers[i]) > -1){
          const liTag2 = document.createElement("li");
          liTag2.className = "collection-item";
          const textN2 = document.createTextNode(answers[i])
          liTag2.appendChild(textN2);
          document.querySelector('#right').appendChild(liTag2)
          counter++;
        }
        else{
          console.log("Kommer du ens hit  ")
          const liTag3 = document.createElement("li");
          liTag3.className = "collection-item";
          const textN3 = document.createTextNode(answers[i])
          liTag3.appendChild(textN3);
          const list2 = document.querySelector('#wrong').appendChild(liTag3)
        }
    }
    document.querySelector('#result').style.display = 'block'
    for (var j = 0; j < facit.length; j++) {
      const liTag4 = document.createElement("li");

      liTag4.className = "collection-item";

      const textN4 = document.createTextNode(facit[j])

      liTag4.appendChild(textN4);

      document.querySelector('#facitList').appendChild(liTag4)
    }


    const info = document.querySelector('#infoText')
    console.log(info)
    info.textContent = "Nu är det slut, du fick "+ counter+" rätt av  25 möjliga. Och har du skrivit samma flera gånger är det på ditt samvete!! jesus ser dig";
    console.log(info)
    info.style.color = "black"
    info.style.fontSize = "35px"

    console.log(counter)
  }


}

window.onload = getter.init();
