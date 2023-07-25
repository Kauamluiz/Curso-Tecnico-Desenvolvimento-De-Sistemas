#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);


#define bt2 2
#define bt3 3
#define bt4 4
#define btDesl 5
#define sensor 6
#define sinal 7

int armado = 0;
int ligar = 0;

void setup()
{
  pinMode(bt2, INPUT_PULLUP);
  pinMode(bt3, INPUT_PULLUP);
  pinMode(bt4, INPUT_PULLUP);
  pinMode(btDesl, INPUT_PULLUP);
  pinMode(sensor, OUTPUT);
  pinMode(sinal, OUTPUT);
  lcd_1.begin(16, 2);
  
}

void loop()
{
  if(digitalRead(btDesl) == 0){
    
    if(armado == 0){
   	  armado = 1;
     
    }else{
      armado = 0;
      ligar = 0; 
      
    }
    
    while(digitalRead(btDesl) == 0){}
  }
  
  if(armado == 1){
    
  	if(digitalRead(bt2) == 0){
    
    	if(ligar == 0){
    	ligar = 1;
    	}
        lcd_1.clear();
        lcd_1.setCursor(3, 0);
    	lcd_1.print("Sensor do");
        lcd_1.setCursor(4, 1);
        lcd_1.print("balcao");
    
    	while(digitalRead(bt2) == 0){}
   
  	}
  
  	if(digitalRead(bt3) == 0){
    
    	if(ligar == 0){
    	ligar = 1;
    	}
      	lcd_1.clear();
      	lcd_1.setCursor(3, 0);
    	lcd_1.print("Sensor da");
        lcd_1.setCursor(4, 1);
        lcd_1.print("cozinha");
      
    	while(digitalRead(bt3) == 0){}
    
  	}
  
  	if(digitalRead(bt4) == 0){
    
    	if(ligar == 0){
    	ligar = 1;
    	}
      	lcd_1.clear();
        lcd_1.setCursor(3, 0);
    	lcd_1.print("Sensor do");
        lcd_1.setCursor(4, 1);
        lcd_1.print("banheiro");
      
    	while(digitalRead(bt3) == 0){}
    
  	}
   
  }
  
  digitalWrite(sinal, armado);
  digitalWrite(sensor, ligar);
  
}

