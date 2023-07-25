#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

#define bt2 2
#define bt3 3
#define bt4 4
#define bt5 5
#define bt6 6

int segundos = 0;
int minutos = 0;
int horas = 0;

void setup()
{
  pinMode(bt2, INPUT_PULLUP);
  pinMode(bt3, INPUT_PULLUP);
  pinMode(bt4, INPUT_PULLUP);
  pinMode(bt5, INPUT_PULLUP);
  pinMode(bt6, INPUT_PULLUP);
  lcd_1.begin(16, 2);
}

void loop()
{
  if(digitalRead(bt2) == 0){
    horas++;
    if(horas >= 24){
      horas = 0;
    }
  }
  if(digitalRead(bt3) == 0){
    horas--;
    if(horas < 0){
      horas = 23;
    }
  }
  if(digitalRead(bt4) == 0){
    minutos++;
    if(minutos >= 59){
      minutos = 0;
    }
  }
  if(digitalRead(bt5) == 0){
    minutos--;
    if(minutos < 0){
      minutos = 59;
    }
  }
  if(digitalRead(bt6) == 1){
  relogio();
  }else{
    lcd_1.clear();
    segundos = 0;
    minutos = 0;
    horas = 0;
  }
}   

void relogio()
{
    segundos++;
    if(segundos == 60){
        segundos = 0;
        minutos++;
    if(minutos == 60){
        minutos = 0;
        horas++;
      if(horas >= 24){
        horas = 0;
    }
    }
    } 
  
  	if(horas < 10){
    lcd_1.setCursor(4, 0);
    lcd_1.print("0");
    lcd_1.print(horas);
    lcd_1.print(":"); 
    }
  	if(horas > 9){
    lcd_1.setCursor(4, 0);
    lcd_1.print(horas);
    lcd_1.print(":"); 
  	}
  	if(minutos < 10){
    lcd_1.setCursor(6, 0);
    lcd_1.print(":0");
  	}
    lcd_1.print(minutos);
    lcd_1.print(":");
    if(segundos < 10){
    lcd_1.setCursor(9, 0);
    lcd_1.print(":0");
  	}
    lcd_1.print(segundos);
    delay(1000);
}


