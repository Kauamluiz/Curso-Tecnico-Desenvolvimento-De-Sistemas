
const int trigPin = 26;
const int echoPin = 27;
const int ledPin = 32;

#define SOUND_SPEED 0.034

long duration;
float distanceCm;
int espaco1 = 0; 
int espaco2 = 0;

int valor1 = 0; 
int valor2 = 0; 

void setup() {
  Serial.begin(115200);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  
  distanceCm = duration * SOUND_SPEED/2;

  Serial.print("O espaço 1 está vazio"); 
  Serial.print("O espaço 2 está vazio"); 
  Serial.print("O espaço 3 está vazio"); 
  Serial.print("O espaço 4 está vazio"); 

  if(espaco1 == 1){ 
    //Verificar distancia no dia da bancada;
    if(distanceCm < 14 && distanceCm > 10){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 1 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 

    }else if(distanceCm <= 10 && distanceCm > 6){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 2 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 

    }else if(distanceCm <= 6 && distanceCm > 0){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 3 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 
  }else{
      Serial.print("Espaço livre ! \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, LOW);
      valor
    }
  } 
  
  if(espaco2 == 1){ 
    //Verificar distancia no dia da bancada;
    if(distanceCm < 14 && distanceCm > 10){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 1 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 

    }else if(distanceCm <= 10 && distanceCm > 6){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 2 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 

    }else if(distanceCm <= 6 && distanceCm > 0){
      Serial.print("Ocupado !!! \n");
      Serial.print("Andares = 3 \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, HIGH);
      valor1 = valor1 + 1 
  }else{
      Serial.print("Espaço livre ! \n");
      Serial.print("Distance (cm): ");
      Serial.println(distanceCm);
      digitalWrite(ledPin, LOW);
      valor
    }
  }

  delay(300);
}