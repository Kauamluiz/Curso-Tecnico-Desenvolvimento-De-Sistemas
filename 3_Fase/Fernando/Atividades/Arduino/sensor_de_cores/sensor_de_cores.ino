#define S0 33
#define S1 25
#define S2 26
#define S3 27
#define sensorOut 32
int frequency, r_frequency, g_frequency, b_frequency = 0;
 
void setup()
{
pinMode(S0, OUTPUT);
pinMode(S1, OUTPUT);
pinMode(S2, OUTPUT);
pinMode(S3, OUTPUT);
pinMode(sensorOut, INPUT);
 
// Setting frequency-scaling to 20%
digitalWrite(S0,HIGH);
digitalWrite(S1,HIGH);
 
Serial.begin(9600);
}
 
void loop()
{
// Setting red filtered photodiodes to be read
digitalWrite(S2,LOW);
digitalWrite(S3,LOW);
// Reading the output frequency
frequency = pulseIn(sensorOut, digitalRead(sensorOut) == HIGH ? LOW : HIGH);

// redColor = map(redFrequency, 70, 120, 255,0);
r_frequency = map(frequency, 70, 120, 255,0);

// Printing the value on the serial monitor
Serial.print("R= ");//printing name
Serial.print(r_frequency);//printing RED color frequency
Serial.print(" ");
delay(100);
// Setting Green filtered photodiodes to be read
digitalWrite(S2,HIGH);
digitalWrite(S3,HIGH);
// Reading the output frequency
frequency = pulseIn(sensorOut, digitalRead(sensorOut) == HIGH ? LOW : HIGH);

// greenColor = map(greenFrequency, 70, 120, 255,0);
g_frequency = map(frequency, 70, 120, 255,0);

// Printing the value on the serial monitor
Serial.print("G= ");//printing name
Serial.print(g_frequency);//printing RED color frequency
Serial.print(" ");
delay(100);
// Setting Blue filtered photodiodes to be read
digitalWrite(S2,LOW);
digitalWrite(S3,HIGH);
// Reading the output frequency
frequency = pulseIn(sensorOut, digitalRead(sensorOut) == HIGH ? LOW : HIGH);  

// blueColor = map(blueFrequency, 70, 120, 255,0);
b_frequency = map(frequency, 70, 120, 255,0);

// Printing the value on the serial monitor
Serial.print("B= ");//printing name
Serial.print(b_frequency);//printing RED color frequency
Serial.println(" ");
delay(100);

if(r_frequency > g_frequency && r_frequency > b_frequency){
      Serial.println(" - RED detected!");

  }
  if(g_frequency > r_frequency && g_frequency > b_frequency){
    Serial.println(" - GREEN detected!");

  }
  if(b_frequency > r_frequency && b_frequency > g_frequency){
    Serial.println(" - BLUE detected!");

  }

}