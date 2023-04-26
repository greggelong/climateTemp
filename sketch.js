
currRow=1;
function preload(){
    data = loadTable("gistemp.csv", "csv","header")
}
function setup() {
    cnv =createCanvas(600, 600);
    cnv.parent("sketch-holder");
  
    background(0);
    //fill(255)
    //ellipse(300,300,50,50)
    print(data)
    print(data.getRow(142).arr); // getRow(rn).arr returns an the row as an array not counting header so start with zero
    textAlign(CENTER)
    rectMode(CENTER)
    frameRate(10)
  
  }


  function draw(){
    background(0)
    translate(width/2,height/2)
    stroke(255)
    noFill();
    for (let i = 0; i< currRow; i++){
        let year = data.getRow(i).arr[0]
        let yearAvg = parseFloat(data.getRow(i).arr[13]); // year avg. same data in zonal
        let mydiameter = map(yearAvg,-1,1,0,width)
        fill(0)
        noStroke()
        rect(0,-5,80,40)
        textSize(30);
        fill(0,255,0);
        text(year,0,0)
        // colors 
        let cold =color(0,0,255);
        let warm =color(255,0,0);
        let zero =color(255);
        let strkClr = zero;
        if (yearAvg <0){
          //cold
          strkClr = lerpColor(zero,cold,abs(yearAvg));

        }else{
          //warm
          strkClr = lerpColor(zero,warm,(yearAvg))
        }



        //print(i,year,mydiameter)
        stroke(strkClr)
        strokeWeight(2)
        noFill();
        circle(0,0,mydiameter )

    }
    currRow++
    if (currRow>143){
      currRow =0;
    }

  }
  
