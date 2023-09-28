#include "DHTesp.h"
DHTesp dht;
#define DHT11_PIN 27

void setup(){
    Serial.begin(9600);
    dht.setup(DHT11_PIN, DHTesp::DHT11);
    digitalWrite(27, HIGH);
}

void loop(){
    delay(dht.getMinimumSamplingPeriod());
    float umidade = dht.getHumidity();
    float temperatura = dht.getTemperature();

    Serial.print("Temperatura = ");
    Serial.println(temperatura);
    Serial.print("Umidade = ");
    Serial.println(umidade);
    delay(1000);
}
