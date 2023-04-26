
currRow=0;
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
     
  
  }


  function draw(){
    translate(width/2,height/2)
    stroke(255)
    noFill();
    for (let i = 1; i< 142; i++){
        let year = data.getRow(i).arr[0]
        let yearAvg = data.getRow(i).arr[13]; // year avg. same data in zonal
        let mydiameter = map(yearAvg,-.5,1,0,width)
        print(i,year,mydiameter)
        stroke(random(255),random(255),random(255))
        circle(0,0,mydiameter )

    }
    noLoop()

  }
  
