#define bt2 2
#define bt3 3
#define bt4 4 
#define bt5 5
#define lampada 13

int acao = 0;

void setup(){
  pinMode(lampada, OUTPUT);
  pinMode(bt2, INPUT_PULLUP);
  pinMode(bt3, INPUT_PULLUP);
  pinMode(bt4, INPUT_PULLUP);
  pinMode(bt5, INPUT_PULLUP);
}

// the loop function runs over and over again forever
void loop(){
  if(digitalRead(bt2) == 0){
    if(acao == 1){
      acao = 0;
    }else{
      acao = 1;
    }
    digitalWrite(lampada, acao);
    
    while(digitalRead(bt2) == 0){}
  }
  
  if(digitalRead(bt3) == 0){
    if(acao == 1){
      acao = 0;
    }else{
      acao = 1;
    }
    digitalWrite(lampada, acao);
    
    while(digitalRead(bt3) == 0){}
  }
  
  if(digitalRead(bt4) == 0){
    if(acao == 1){
      acao = 0;
    }else{
      acao = 1;
    }
    digitalWrite(lampada, acao);
    
    while(digitalRead(bt4) == 0){}
  }
  
  if(digitalRead(bt5) == 0){
    if(acao == 1){
      acao = 0;
    }else{
      acao = 1;
    }
    digitalWrite(lampada, acao);
     
    while(digitalRead(bt5) == 0){}
  }
}
