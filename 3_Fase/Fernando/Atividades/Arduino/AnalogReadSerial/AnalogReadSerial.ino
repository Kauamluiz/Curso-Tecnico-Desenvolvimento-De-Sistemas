/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

int sensorValueOut = 0;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(35, INPUT);
  pinMode(25, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = digitalRead(35);
  if(!sensorValue && sensorValueOut < 255){
    sensorValueOut++;
    delay(10);
  }
  if(sensorValue){
    sensorValueOut = 0;
  }

  // print out the value you read:
  Serial.println(sensorValue);
  dacWrite(25, !sensorValue*255);
  delay(1);  // delay in between reads for stability
}
