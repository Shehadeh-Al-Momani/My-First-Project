console.log("Welcom to a new project");
GK = ["Jan Oblak"," Alisson", "Ter Stegen" , "Thibaut Courtois" , "Keylor Navas" ," Peter Gulasci" , "Samir Handanovic" , "Ederson" ," David de Gea" ];
CB1= ["Raphael Varane"," Gerard Pique", "Jerome Boateng" , "Leonardo Bonucci" , "Virgil van Dijk" ," Kalidou Koulibaly" , "Milan Skriniar" , "Umtiti" ];
CB2= ["Raphael Varane"," Gerard Pique", "Jerome Boateng" , "Leonardo Bonucci" , "Virgil van Dijk" ," Kalidou Koulibaly" , "Milan Skriniar" , "Umtiti","Sergio Ramos" ];
RB = ["Alexander-Arnold" ,"Aaron Bissaka","Achraf Hakimi","Ricardo Perreira"," Benjamin Pavard","Dani Carvajal","Thomas Meunier"];
LB = ["Ben Chilwell"," Raphael Guerreiro", "Juan Bernat" , "David Alaba" , "Marcelo" ,"Ferland Mendy" , "Alex Sandro" , "Andrew Robertson" ," Jordi Alba" ];
DM = ["Declan Rice"," Wilfred Ndidi", "Rodri" , "Idrissa Gueye" , "Fabinho" ," N’Golo Kante" , "Brozovic" , "Joshua Kimmich" ," Sergio Busquets" ];
CM1= ["Jordan Henderson","Jack Grealish","Thiago Alcantra","Mateo Kovacic","Toni Kroos" ,"Kevin De Bruyne","Luka Modrić","Christian Eriksen","Paul Pogba","Marco Verratti","Parejo" ,"Santi Cazorla" ,"Saul Niguez" ,"Leon Goretzka" ,"Axel Witsel","Fabián Ruiz" ,"Julian Brandt" ,"Ismael Bennacer" ,"Frenkie de Jong","Arthur Melo","Donny van de Beek"];
CM2= ["Jordan Henderson","Jack Grealish","Thiago Alcantra","Mateo Kovacic","Toni Kroos" ,"Kevin De Bruyne","Christian Eriksen","Paul Pogba","Marco Verratti","Parejo" ,"Santi Cazorla" ,"Saul Niguez" ,"Leon Goretzka" ,"Axel Witsel","Fabián Ruiz" ,"Julian Brandt" ,"Ismael Bennacer" ,"Frenkie de Jong","Arthur Melo","Donny van de Beek"];
AM = ["Bruno Fernandes","Thomas Müller","Alejandro Gómez","Sergio Canales","Marco Reus","Philippe Coutinho","Aleksei Miranchuk","Henrikh Mkhitaryan","Isco","James Rodríguez"] ;
RW = ['Adama Traore','Ferran Torres','Paulo Dybala','Kai Havertz','Riyad Mahrez' ,'Mo Salah','Jadon Sancho','Serge Gnabry','Raheem Sterling' ,'Bernardo Silva','Angel Di Maria','Kylian Mbappé','Nicolas Pepe','Hakim Ziyech'];
LW = ["Eden Hazard","Saido Mané","Leroy Sané","Philippe Coutinho","Quinzy Promes","Serge Gnabry","Raheem Sterling","Kylian Mbappé","Kinglsey Coman","Ivan Perisic","F.Bernardeschi"];
SS = ["Karim Benzema", "Roberto Firmino","Lionel Messi" ,"Neymar Jr." , "João Félix" ,"Philippe Coutinho" ,"Paulo Dybala"];
CF = ["Karim Benzema"," Romelu Lukaku", "Ter Stegen" , "Pierre Aubameyang" , "Keylor Navas" ," Mauro Icardi" , "Roberto Firmino" , "Sergio Aguero" ,"Kylian Mbappé", "Luis Suarez" ,"Timo Werner" ,"Robert Lewandowski" ,"Harry Kane"];
                    
function team() {
  let teamx = document.getElementById("team").value;

  if (teamx === "FC BARCELONA") {
    document.getElementById("selectPicTeam").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTzQFW7xORH-BmQT_fW1xNfgdqH8qjOZom2g&usqp=CAU";
  } else if (teamx === "BAYERN MUNCHEN") {
    document.getElementById("selectPicTeam").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2YvRQ2ClaTa0hvo8c6ru3OMLQbArjVpFANQ&usqp=CAU";
  } else if (teamx === "REAL MADRID") {
    document.getElementById("selectPicTeam").src = "";
  }
}

function coash() {
  let coashx = document.getElementById("coash").value;

  if (coashx === "Zinedin zidan") {
    document.getElementById("selectPicCoash").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYCZTkB4NzLq_ywY7oy5O-2Js71D_7w9u2zw&usqp=CAU";
  } else if (coashx === "Hansi flick") {
    document.getElementById("selectPicCoash").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGsYZptuPHua01UgbrnqM17HXinggXvVNZXQ&usqp=CAU";
  } else if (coashx === "Jürgen Klopp") {
    document.getElementById("selectPicCoash").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf9JYNVZVxcFpEb7E7bFzV0EY_Tpd9nR06TA&usqp=CAU";
  }
}

function select(x) {
  let playerSelect = [],select, i, option;
  if (x === 1) {
    select = document.getElementById("selectGK");
    playerSelect = GK;
  } else if (x === 2) {
    select = document.getElementById("selectCB1");
    playerSelect = CB1;
  } else if (x === 3) {
    select = document.getElementById("selectCB2");
    playerSelect = CB2;
  } else if (x === 4) {
    select = document.getElementById("selectRB");
    playerSelect = RB;
  } else if (x === 5) {
    select = document.getElementById("selectLB");
    playerSelect = LB;
  } else if (x === 6) {
    select = document.getElementById("selectDM");
    playerSelect = DM;
  } else if (x === 7) {
    select = document.getElementById("selectCM1");
    playerSelect = CM1;
  } else if (x === 8) {
    select = document.getElementById("selectCM2");
    playerSelect = CM2;
  } else if (x === 9) {
    select = document.getElementById("selectAM");
    playerSelect = AM;
  } else if (x === 10) {
    select = document.getElementById("selectRW");
    playerSelect = RW;
  } else if (x === 11) {
    select = document.getElementById("selectLW");
    playerSelect = LW;
  } else if (x === 12) {
    select = document.getElementById("selectSS");
    playerSelect = SS;
  } else if (x === 13) {
    select = document.getElementById("selectCF");
    playerSelect = CF;
  }
  if (x === 14) {
    select = document.getElementById("subGK");
    playerSelect = GK;
  } else if (x === 15) {
    select = document.getElementById("subCB1");
    playerSelect = CB1;
  } else if (x === 16) {
    select = document.getElementById("subCB2");
    playerSelect = CB2;
  } else if (x === 17) {
    select = document.getElementById("subRB");
    playerSelect = RB;
  } else if (x === 18) {
    select = document.getElementById("subLB");
    playerSelect = LB;
  } else if (x === 19) {
    select = document.getElementById("subDM");
    playerSelect = DM;
  } else if (x === 20) {
    select = document.getElementById("subCM1");
    playerSelect = CM1;
  } else if (x === 21) {
    select = document.getElementById("subCM2");
    playerSelect = CM2;
  } else if (x === 22) {
    select = document.getElementById("subAM");
    playerSelect = AM;
  } else if (x === 23) {
    select = document.getElementById("subRW");
    playerSelect = RW;
  } else if (x === 24) {
    select = document.getElementById("subLW");
    playerSelect = LW;
  } else if (x === 25) {
    select = document.getElementById("subSS");
    playerSelect = SS;
  } else if (x === 26) {
    select = document.getElementById("subCF");
    playerSelect = CF;
  }
  if (select.length === 1) {
    for (i = 0; i < playerSelect.length; i += 1) {
      option = document.createElement("option");
      option.value = option.text = playerSelect[i];
      select.add(option);
    }
  }
}

function seletTactics() {
  let tacticsPreset = document.getElementById("seletTactics").value;
  // defult visible :
  document.getElementById("playerDM").style.visibility = "visible";
  document.getElementById("selectDM").style.visibility = "visible";
  document.getElementById("playerAM").style.visibility = "visible";
  document.getElementById("selectAM").style.visibility = "visible";
  //defult hidden :
  document.getElementById("playerCM2").style.visibility = "hidden";
  document.getElementById("selectCM2").style.visibility = "hidden";
  document.getElementById("playerSS").style.visibility = "hidden";
  document.getElementById("selectSS").style.visibility = "hidden";

  if (tacticsPreset === "4-3-3") {
    document.getElementById("playerAM").style.visibility = "hidden";
    document.getElementById("selectAM").style.visibility = "hidden";
    document.getElementById("playerSS").style.visibility = "hidden";
    document.getElementById("selectSS").style.visibility = "hidden";
    document.getElementById("playerCM2").style.visibility = "visible";
    document.getElementById("selectCM2").style.visibility = "visible";
  } else if (tacticsPreset === "4-2-4") {
    document.getElementById("playerAM").style.visibility = "hidden";
    document.getElementById("selectAM").style.visibility = "hidden";
    document.getElementById("playerDM").style.visibility = "hidden";
    document.getElementById("selectDM").style.visibility = "hidden";
    document.getElementById("playerSS").style.visibility = "visible";
    document.getElementById("selectSS").style.visibility = "visible";
    document.getElementById("playerCM2").style.visibility = "visible";
    document.getElementById("selectCM2").style.visibility = "visible";
  }
}