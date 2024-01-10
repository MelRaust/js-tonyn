
function step1(){ 
    let step1 = document.getElementById('step1')
    let stepinner1 = document.getElementById('stepinner1')
    let title = document.getElementById('title')
    step1.style.opacity = 1;
    step1.transition = "2s"
    stepinner1.style.opacity = 1;
    title.style.opacity = 1;
    title.style.top = 0
    title.transition = "2s" 
    
    setTimeout(()=>{     
    
    step1.style.opacity = 0;   
    step1.transition = "8s"     
    step1.style.opacity = 0;     
    step1.style.transition = "8s"     
    step1.style.opacity = 0;     
    step1.style.transition.left = "8s"     
    step1.style.opacity = 0;     
    step1.style.transition =   "8s"    
},"10000");
}

function step2(){ 
    let step2 = document.getElementById('step2')
    let stepinner2 = document.getElementById('stepinner2')
    let title2 = document.getElementById('title2')

    console.log(step2)
    
    step2.style.opacity = 1;
    stepinner2.style.opacity = 1;
    title2.style.opacity = 1;
    
    setTimeout(()=>{     
    
    step2.style.opacity = 0;     
    step2.transition = "8s"     
    step2.style.opacity = 0;     
    step2.style.transition = "8s"     
    step2.style.opacity = 0;     
    step2.style.transition.left = "8s"     
    step2.style.opacity = 0;     
    step2.style.transition = "8s"    
},"10000");
}

function step3(){ 
    let step3 = document.getElementById('step3')
    let stepinner3 = document.getElementById('stepinner3')
    let title3 = document.getElementById('title3')

    console.log(step3)
    
    step3.style.opacity = 1;
    stepinner3.style.opacity = 1;
    title3.style.opacity = 1;
    
    setTimeout(()=>{     
    
    step3.style.opacity = 0;     
    step3.transition = "8s"     
    step3.style.opacity = 0;     
    step3.style.transition = "8s"     
    step3.style.opacity = 0;     
    step3.style.transition.left = "8s"     
    step3.style.opacity = 0;     
    step3.style.transition =   "8s"    
},"10000");
}

function step4(){ 
    let step4 = document.getElementById('step4')
    let stepinner4 = document.getElementById('stepinner4')
    let title4 = document.getElementById('title4')

    console.log(step4)
    
    step4.style.opacity = 1;
    stepinner4.style.opacity = 1;
    title4.style.opacity = 1;
    
    setTimeout(()=>{     
    
    step4.style.opacity = 0;     
    step4.transition = "8s"     
    step4.style.opacity = 0;     
    step4.style.transition = "8s"     
    step4.style.opacity = 0;     
    step4.style.transition.left = "8s"     
    step4.style.opacity = 0;     
    step4.style.transition =   "8s"    
},"10000");
}

function step5(){ 
    let step5 = document.getElementById('step5')
    let stepinner5 = document.getElementById('stepinner5')
    let stepinner6 = document.getElementById('stepinner6')
    let title5 = document.getElementById('title5')

    console.log(step5)
    
    step5.style.opacity = 1;
    stepinner5.style.opacity = 1;
    stepinner6.style.opacity = 1;
    title5.style.opacity = 1;
    
    setTimeout(()=>{     
    
    step5.style.opacity = 0;     
    step5.transition = "8s"     
    step5.style.opacity = 0;     
    step5.style.transition = "8s"     
    step5.style.opacity = 0;     
    step5.style.transition.left = "8s"     
    step5.style.opacity = 0;     
    step5.style.transition =   "8s"    
},"10000");
}


function start(){
    step1(); 
    step2();
    step3();
    step4();
    step5();
}
