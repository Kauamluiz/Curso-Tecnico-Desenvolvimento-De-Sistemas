int segundos = 0;
int minutos = 0;
int botao = 0;

void setup(){
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  Serial.begin(9600);
  Serial.print(segundos);
  
}

// 0, pressionado || 1, solto
void loop(){
    if(digitalRead(2) == 0){
        segundos++;
        Serial.print("\n");
        Serial.print(segundos);
        Serial.print(":");
        Serial.print(minutos);
        delay(200);

    }
    if(digitalRead(3) == 0){
        segundos--;
        Serial.print("\n");
        Serial.print(segundos);
        Serial.print(":");
        Serial.print(minutos);
        delay(200);

    }
    if(digitalRead(4) == 0){
        minutos++;
        Serial.print("\n");
        Serial.print(segundos);
        delay(200);
        Serial.print(":");
        Serial.print(minutos);
        delay(200);

    }
    if(digitalRead(5) == 0){
        minutos--;
        Serial.print("\n");
        Serial.print(segundos);
        delay(200);
        Serial.print(":");
        Serial.print(minutos);
        delay(200);

    }
}
