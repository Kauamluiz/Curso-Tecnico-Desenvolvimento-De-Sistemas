/*
  Alterado por: Fernando Costenaro Silva 
  Baseado no exemplo de:
 
  Rui Santos
  Complete project details at https://RandomNerdTutorials.com
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files.
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
*/

// Importa as bibliotecas necessarias
#include <ESPAsyncWebServer.h>


// Substitua com as credenciais da sua rede
const char* ssid     = "FIESC_IOT";
const char* password = "C6qnM4ag81";

// Seu endereço de IP estático (será atribuido à placa)
IPAddress local_IP(172, 20, 60, 24);
// O endereço do gateway
IPAddress gateway(172, 20, 63, 254);
IPAddress subnet(255, 255, 252, 0);

const int pinoSaidaDigital = 26; //(LED da placa - pino 2)
const int pinoSaidaAnalogica = 5; //10; //GPIO5 -> D1
const int pinoEntradaDigital = 4; //9; GPIO4 -> D2
const int pinoEntradaAnalogica = A0;

String strValorDigital; // Estado do LED - ON/OFF
const char* PARAM_INPUT_1 = "input1"; //armazena parametro recebido



// Cria um objeto AsyncWebServer na porta 80
AsyncWebServer server(80);

String getValorAnalogico() {
  int valorLido = analogRead(pinoEntradaAnalogica);
  //map(value, fromLow, fromHigh, toLow, toHigh)
  float valorConvertido = float(map(valorLido, 0, 1023, 0, 33))/10.0; //le em inteiro de 0 a 33 e divide por 10 -> saida de 0 a 3.3 V
  Serial.println("valor analogico lido: " + String(valorConvertido));
  return String(valorConvertido);
}
  
String getValorDigital() {
  int valorLido = digitalRead(pinoEntradaDigital);
  if(valorLido == LOW){ // LOW ou HIGH depende da ligação do circuito
    strValorDigital = "ON";
  }
  else{
    strValorDigital = "OFF";
  }
  Serial.println("valor digital lido: " + String(valorLido) + " " + strValorDigital);
  return String(strValorDigital);
}

void setValorDigital(bool estado) {
  digitalWrite(pinoSaidaDigital, estado); 
  Serial.println("valor digital escrito: " + String(estado));
}


void setValorAnalogico(String valorAnalogico) {
  int valor = valorAnalogico.toInt(); //retorna 0 se nao for numero
  if(valor >= 0 && valor < 255){
    analogWrite(pinoSaidaAnalogica, valor);
    Serial.println("valor analogico escrito: " + valorAnalogico);
  }else{
    Serial.println("valor analogico fora da faixa: 0 a 254");
  }
  
}

 
void setup(){
  // Porta Serial para debug
  Serial.begin(115200);
  pinMode(pinoSaidaDigital, OUTPUT); //saida digital
  pinMode(pinoSaidaAnalogica, OUTPUT); //saida analogica
  pinMode(pinoEntradaDigital, INPUT); //entrada digital
  //entrada analógica já vem configurada no pino A0

  // Configura o endereço IP estático
  if (!WiFi.config(local_IP, gateway, subnet)) {
    Serial.println("Falha ao configurar em modo Station (STA)");
  }
  
  // Conecta na rede Wi-Fi com o SSID e senha (password)
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Imprime pela serial o endereço de IP e inicia o servidor web
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
 
  // Rota para comandar a saida digital (Liga / ON)
  server.on("/saidaDigital/on", HTTP_GET, [](AsyncWebServerRequest *request){
    setValorDigital(LOW); // LOW ou HIGH depende da ligação do circuito
    request->send_P(200, "text/plain", "ON");  
  });
  
  // Rota para comandar a saida digital (Desliga / OFF)
  server.on("/saidaDigital/off", HTTP_GET, [](AsyncWebServerRequest *request){
    setValorDigital(HIGH); // LOW ou HIGH depende da ligação do circuito
    request->send_P(200, "text/plain", "OFF");
  });

  // Rota para comandar a saida analogica (PWM) formato: <ESP_IP>/saidaAnalogica?input1=<inputMessage>
  server.on("/saidaAnalogica", HTTP_GET, [] (AsyncWebServerRequest *request) {
    String inputMessage;
    String inputParam;
    // GET input1 value on <ESP_IP>/saidaAnalogica?input1=<inputMessage>
    if (request->hasParam(PARAM_INPUT_1)) {
      inputMessage = request->getParam(PARAM_INPUT_1)->value(); //valor do paramtro
      //inputParam = PARAM_INPUT_1; //se quiser saber o nome do parametro
      setValorAnalogico(inputMessage); //comanda o valor
    }else {
      inputMessage = "Nenhuma mensagem enviada";
      inputParam = "none";
    }
    request->send_P(200, "text/plain", inputMessage.c_str());
    Serial.println(inputMessage);
  });
  
  // Rota para ler a entrada digital
  server.on("/entradaDigital", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", getValorDigital().c_str());
  });

  // Rota para ler a entrada analogica
  server.on("/entradaAnalogica", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", getValorAnalogico().c_str());
  });
  
  // Adiciona no cabeçalho para evitar erro de acesso do CORS
  DefaultHeaders::Instance().addHeader("Access-Control-Allow-Origin", "*");
  // Inicia o servidor
  server.begin();
}
 
void loop(){
  
}


