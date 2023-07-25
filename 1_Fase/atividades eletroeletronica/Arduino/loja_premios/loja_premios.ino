
#define bt1 12
int i = 0;
void setup()
{
  pinMode(bt1, INPUT_PULLUP);
  pinMode(13, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  while(i < 1){
    i++;
    digitalWrite(13, 1);
    delay(5000);
    digitalWrite(13, 0);
  }
    
   if(digitalRead(bt1) == 0){
    digitalWrite(13, 1);
    delay(5000);
    digitalWrite(13, 0);
    Serial.print("Ligado");
    delay(200);
    Serial.print("\n");
  
  }
}
