#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

int segundos = 0;
int minutos = 0;
int horas = 0;

void setup()
{
  lcd_1.begin(16, 2);
}

void loop()
{
    segundos++;
    if(segundos == 60){
        segundos = 0;
        minutos++;
    if(minutos == 60){
        minutos = 0;
        horas++;
      if(horas == 24){
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