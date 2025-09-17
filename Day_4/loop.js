for(let i =1; i<=row;i++){
    for(let j=1;j<=col;j++){
        if(i+j>row&&j-i<=row){
            line+= "*"
        }
        else{
            line+=" "
        }
    }
    console.log(line);

}