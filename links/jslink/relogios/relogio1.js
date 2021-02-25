

// Primeiro

const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.querySelector("#hour");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hour.innerHTML = h+":";
    minutes.innerHTML = m+":";
    seconds.innerHTML = s+"&nbsp";
 })


// Segundo

 const hr2 = document.querySelector("#hr2")
 const mn2 = document.querySelector("#mn2")
 const sc2 = document.querySelector("#sc2")
 
 setInterval(() => {
     let day = new Date();
     let hh = day.getHours() * 30;
     let mm = day.getMinutes() * 6;
     let ss = day.getSeconds() * 6;
 
     hr2.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
     mn2.style.transform = `rotateZ(${mm}deg)`;
     sc2.style.transform = `rotateZ(${ss}deg)`;
 
    //  let hour2 = document.querySelector("#hour2");
    //  let minutes2 = document.querySelector("#minutes2");
    //  let seconds2 = document.querySelector("#seconds2");
 
    //  let h = new Date().getHours();
    //  let m = new Date().getMinutes();
    //  let s = new Date().getSeconds();
     
 
    //  h = (h < 10) ? "0" + h : h
    //  m = (m < 10) ? "0" + m : m
    //  s = (s < 10) ? "0" + s : s
 
    //  hour2.innerHTML = h+":";
    //  minutes2.innerHTML = m+":";
    //  seconds2.innerHTML = s+"&nbsp";
  })
 
 
//   Terceiro

  const hr3 = document.querySelector("#hr3")
  const mn3 = document.querySelector("#mn3")
  const sc3 = document.querySelector("#sc3")
  
  setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;
  
      hr3.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      mn3.style.transform = `rotateZ(${mm}deg)`;
      sc3.style.transform = `rotateZ(${ss}deg)`;
  
      // let hour3 = document.querySelector("#hour3");
      // let minutes3 = document.querySelector("#minutes3");
      // let seconds3 = document.querySelector("#seconds3");
  
      // let h = new Date().getHours();
      // let m = new Date().getMinutes();
      // let s = new Date().getSeconds();
      
  
      // h = (h < 10) ? "0" + h : h
      // m = (m < 10) ? "0" + m : m
      // s = (s < 10) ? "0" + s : s
  
      // hour3.innerHTML = h+":";
      // minutes3.innerHTML = m+":";
      // seconds3.innerHTML = s+"&nbsp";
   })
  
  //   Quarto

  const hr4 = document.querySelector("#hr4")
  const mn4 = document.querySelector("#mn4")
  const sc4 = document.querySelector("#sc4")
  
  setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;
  
      hr4.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      mn4.style.transform = `rotateZ(${mm}deg)`;
      sc4.style.transform = `rotateZ(${ss}deg)`;
  
      // let hour4 = document.querySelector("#hour4");
      // let minutes4 = document.querySelector("#minutes4");
      // let seconds4 = document.querySelector("#seconds4");
  
      // let h = new Date().getHours();
      // let m = new Date().getMinutes();
      // let s = new Date().getSeconds();
      
  
      // h = (h < 10) ? "0" + h : h
      // m = (m < 10) ? "0" + m : m
      // s = (s < 10) ? "0" + s : s
  
      // hour4.innerHTML = h+":";
      // minutes4.innerHTML = m+":";
      // seconds4.innerHTML = s+"&nbsp";
   })