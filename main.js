//função serve para acessar o microfone e carregar o modelo do teachabel
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7UUS4sHk4/model.json ', modelReady);
}
//acessa a função classify do ml5 e checa se o modelo carregou corretamente
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
   
      document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
      //Este código ajuda visualmente com os números indo de 0 a 100%
      document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    //Estas variáveis armazenam as imagens
      img = document.getElementById('alien1') 
      img1 = document.getElementById('alien2')
      img2 = document.getElementById('alien3')
      img3 = document.getElementById('alien4')
   //Esses Ifs checam se o modelo corresponde ao que o usuário fez, e isso faz os aliens dançarem 
      if (results[0].label == "Palmas") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Galinha") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Estalos") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
      }else{
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
      }
    }
  }