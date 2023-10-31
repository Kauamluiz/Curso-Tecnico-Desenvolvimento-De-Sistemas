//exemplo base
//referência: https://raw.githubusercontent.com/vinicius0082/esp32-tagoIO/main/exemplos/mpu_esp32_mqtt_tagoIO


//Envio de Dados para tagoIO via MQTT

#include <ArduinoJson.h>
#include "EspMQTTClient.h"

//pinos de entrada e saída
const int trigPin = 27;
const int echoPin = 26;
const int BuzzerPin = 33;
const int LedPin = 32;

//variáveis para Json
char json_sensor[100];

//variáveis internas
#define SOUND_SPEED 0.034
long duration;
float distanceCm;
int valor_sensor;


//configurações da conexão MQTT
EspMQTTClient client
(
  "FIESC_IOT", //nome da sua rede Wi-Fi
  "C6qnM4ag81", //senha da sua rede Wi-Fi
  "mqtt.tago.io",  // MQTT Broker server ip padrão da tago
  "Token",   // username
  "67f1e979-a316-4e8f-984e-89947258b1da",   // Código do Token
  "TestClient",     // Client name that uniquely identify your device
  1883              // The MQTT port, default to 1883. this line can be omitted
);

//EspMQTTClient client("FIESC_IOT", "C6qnM4ag81", "mqtt.tago.io", "Token", "a69fcc1e-31f3-4d0c-9fbe-cf23c920ec6b", "TestClient", 1883 );

//configuração dos pinos
void setup(){
  Serial.begin(115200);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(BuzzerPin, OUTPUT);
  pinMode(LedPin, OUTPUT);
}

void leitura_sinais()
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  
  distanceCm = duration * SOUND_SPEED/2;

  if(distanceCm > 20.00){
    digitalWrite(LedPin, LOW);
    digitalWrite(BuzzerPin, HIGH);

  }else if(distanceCm <= 20.00 && distanceCm >= 13.00){
    digitalWrite(LedPin, HIGH);
    digitalWrite(BuzzerPin, LOW);
    delay(500);
    digitalWrite(LedPin, LOW);
    digitalWrite(BuzzerPin, HIGH);
    delay(500);

  }else if(distanceCm < 13.00 && distanceCm > 5.00){
    digitalWrite(LedPin, HIGH);
    digitalWrite(BuzzerPin, LOW);
    delay(300);
    digitalWrite(LedPin, LOW);
    digitalWrite(BuzzerPin, HIGH);
    delay(300);

  }else{
    digitalWrite(LedPin, HIGH);
    digitalWrite(BuzzerPin, LOW);
    delay(100);
    digitalWrite(LedPin, LOW);
    digitalWrite(BuzzerPin, HIGH);
    delay(100);

  }

  Serial.print("Distance (cm): ");
  Serial.println(distanceCm);

  valor_sensor = distanceCm;

}

void converte_json()
{
  StaticJsonDocument<300> sjson_sensor;

  sjson_sensor["variable"] = "distancia";
  sjson_sensor["value"] = valor_sensor;
  serializeJson(sjson_sensor, json_sensor);
}

void envia_msg()
{
  client.publish("/distancia", json_sensor); // You can activate the retain flag by setting the third parameter to true
}

//loop do programa
void loop()
{
  leitura_sinais();
  converte_json();
  envia_msg();

  delay(200);

  client.loop();
}

// This function is called once everything is connected (Wifi and MQTT)
// WARNING : YOU MUST IMPLEMENT IT IF YOU USE EspMQTTClient
void onConnectionEstablished()
{
   client.subscribe("node/status", [] (const String &payload)  {
   Serial.println(payload);
  });
}
