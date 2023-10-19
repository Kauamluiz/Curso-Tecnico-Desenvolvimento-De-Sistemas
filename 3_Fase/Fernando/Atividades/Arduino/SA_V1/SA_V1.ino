
const int trigPin = 26;
const int echoPin = 27;
const int ledPin = 32;

#define SOUND_SPEED 0.034

long duration;
float distanceCm;

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

  //Verificar distancia no dia da bancada;
  if(distanceCm < 14 && distanceCm > 10){
    Serial.print("Ocupado !!! \n");
    Serial.print("Andares = 1 \n");
    Serial.print("Distance (cm): ");
    Serial.println(distanceCm);
    digitalWrite(ledPin, HIGH);

  }else if(distanceCm <= 10 && distanceCm > 6){
    Serial.print("Ocupado !!! \n");
    Serial.print("Andares = 2 \n");
    Serial.print("Distance (cm): ");
    Serial.println(distanceCm);
    digitalWrite(ledPin, HIGH);

  }else if(distanceCm <= 6 && distanceCm > 0){
    Serial.print("Ocupado !!! \n");
    Serial.print("Andares = 3 \n");
    Serial.print("Distance (cm): ");
    Serial.println(distanceCm);
    digitalWrite(ledPin, HIGH);

  }else{
    Serial.print("Espaço livre ! \n");
    Serial.print("Distance (cm): ");
    Serial.println(distanceCm);
    digitalWrite(ledPin, LOW);

  }
  
  delay(300);
}