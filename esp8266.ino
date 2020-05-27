#define TIMER_INTERRUPT_DEBUG      1

#include "ESP8266TimerInterrupt.h"
#include <ESP8266WiFi.h>
#include <SocketIOClient.h>
#include <ArduinoJson.h>
#include <string>
#include <sstream>
/*****************************/

/*****************************/
#define LED_RED           14 
#define PIN_D1            4         // Pin D1 mapped to pin GPIO4 of ESP8266
#define PIN_D2            5         // Pin D1 mapped to pin GPIO5 of ESP8266

unsigned int interruptPin1 = PIN_D1;
unsigned int interruptPin2 = PIN_D2;

#define TIMER_INTERVAL_MS         1
#define DEBOUNCING_INTERVAL_MS    40

#define LOCAL_DEBUG      1

ESP8266Timer ITimer;
/*****************************/

/*****************************/
SocketIOClient client;
 const char* ssid     = "WOLVERINE2.4"; //Wifi SSID
 const char* password = "wolverine24"; //Wifi Pass

// const char* ssid     = "Q6_7339"; //Wifi SSID
// const char* password = "trezza12"; //Wifi Pass

 char host[] = "192.168.0.38"; //nodejs host
 int port = 3000; //nodejs port 3000

/*****************************/

/*****************************/
volatile unsigned long rotationTime1 = 0;
volatile unsigned long rotationTime1R = 0;
volatile unsigned long rotationTime1Rb = 20;

volatile unsigned long rotationTime2 = 0;
volatile unsigned long rotationTime2R = 0;
volatile unsigned long rotationTime2Rb = 20;
volatile unsigned long ancho;
volatile unsigned long ancho1;

volatile int debounceCounter1;
volatile int debounceCounter2;
volatile int frecuencia = 120;
volatile int LongPulse;
volatile int LongPulse1;
volatile int LongPulse2;
volatile int conta2;

volatile bool activeState1 = false;
volatile bool activeState2 = false;
volatile int i = 1;
volatile int i1 = 1;
void ICACHE_RAM_ATTR detectRotation1(void)
{
  activeState1 = true;
}

void ICACHE_RAM_ATTR detectRotation2(void)
{
  activeState2 = true;
}

void ICACHE_RAM_ATTR TimerHandler()
{  
  static bool started = false;
  if ( activeState1 )
  {
    // Reset to prepare for next round of interrupt
    activeState1 = false;

    if (debounceCounter1 >= DEBOUNCING_INTERVAL_MS / TIMER_INTERVAL_MS )
    {
     
     // min time between pulses has passe
      i = i * (-1);
       int a1, b1;
      if( i <= 0 ){   
        a1 = rotationTime1 + rotationTime1R;
        b1 = rotationTime1R;
        Serial.println( "rotationTime1 ms = " + String(a1 * TIMER_INTERVAL_MS) + ", LongPulse1 = " + String(rotationTime1R)  );      
        rotationTime1Rb = rotationTime1;
        }else {
        a1 = rotationTime1Rb + rotationTime1;
        b1 = rotationTime1;
        Serial.println( "rotationTime1 ms = " + String(a1 * TIMER_INTERVAL_MS) + ", LongPulse1 = " + String(rotationTime1)  );
        rotationTime1R = rotationTime1;
        }      
    
      StaticJsonDocument<900> doc1;
      String JSON1;

      doc1["de"] = "ignacio1";
      doc1["cuerpo"] = String(a1) ;
      doc1["cuerpo1"] = String(b1) ;
      doc1["img"] = "5d38d563ec2c35d0344d862f-611.png";
      doc1["sala"] = "Juegos";
      serializeJson(doc1, JSON1);
      client.sendJSON("mensajesp", JSON1);      

      rotationTime1 = 0;
      debounceCounter1 = 0;
    }// else debounceCounter1++;
 }

/*******************************/
  
if ( activeState2 )
  {
     
    // Reset to prepare for next round of interrupt
    activeState2 = false;
     
    
    if (debounceCounter2 >= DEBOUNCING_INTERVAL_MS / TIMER_INTERVAL_MS )
    {
      //min time between pulses has passed
      i1 = i1 * (-1);
      int a2, b2;
      if( i1 <= 0 )
      {   
        a2 = rotationTime2 + rotationTime2R;
        b2 = rotationTime2R;
        Serial.println( "rotationTime2 ms = " + String(rotationTime2 * TIMER_INTERVAL_MS) + ", LongPulse2 = " + String(rotationTime2R)  );      
        rotationTime2Rb = rotationTime2;       
      }else 
       {
        a2 = rotationTime2Rb + rotationTime2;
        b2 = rotationTime2;
        Serial.println( "rotationTime2 ms = " + String(a2 * TIMER_INTERVAL_MS) + ", LongPulse2 = " + String(rotationTime2)  );
        rotationTime2R = rotationTime2;        
       } 
      
      StaticJsonDocument<900> doc2;
      String JSON2;
      doc2["de"] = "ignacio2";
      doc2["cuerpo"] = String(a2) ;
      doc2["cuerpo1"] = String(b2) ;
      doc2["img"] = "5d38d563ec2c35d0344d862f-611.png";
      doc2["sala"] = "Juegos";
      
      serializeJson(doc2, JSON2);
      client.sendJSON("mensajesp", JSON2);
      
      rotationTime2 = 0;
      debounceCounter2 = 0;
    } // else debounceCounter2++;
 }
  
/*******************************/
       
if (rotationTime1 >= 5000)
  {
   // If idle, set RPM to 0, don't increase rotationTime
   Serial.println("rotationTime1 = " + String(rotationTime1) );
   rotationTime1 = 0;
   rotationTime1R = rotationTime1;
  }else
   {
   rotationTime1++;
   }
  
/*******************************/
  
if (rotationTime2 >= 5000)
  {
   // If idle, set RPM to 0, don't increase rotationTime
   Serial.println( "rotationTime2 = " + String(rotationTime2) );
   rotationTime2 = 0;
   rotationTime2R = rotationTime2;
  }else
   {
   rotationTime2++;
   }

/*******************************/

ancho1 = (LongPulse * frecuencia) / 100 ; // porcente en milisegundos del tiempo que est on y of
ancho = frecuencia - ancho1;
if (conta2 >= ancho ) 
  { 
  //  Serial.println( "conta2 = " + String(conta2) );
  conta2 = 0;
  digitalWrite(LED_RED, HIGH);
  }else if(conta2 >= ancho1) 
    { 
     digitalWrite(LED_RED, LOW);
     // Serial.println( "conta2 = " + String(conta2) );
    }
      conta2++;    
      debounceCounter1++;
      debounceCounter2++;
}
/*****************************/

/*****************************/

void setup() 
  {
   pinMode(interruptPin1, INPUT);  
   pinMode(interruptPin2, INPUT); 
   pinMode(LED_RED, OUTPUT);
   digitalWrite(LED_RED, LOW);
  
/*****************************/

   Serial.begin(115200);
   delay(10);
   Serial.println();
   Serial.println();
   Serial.print("Connecting to ");
   Serial.println(ssid);

   WiFi.begin(ssid, password);

   while (WiFi.status() != WL_CONNECTED) {
     delay(500);
     Serial.print(".");
   }

   Serial.println("");
   Serial.println("WiFi connected");
   Serial.println("IP address: ");
   Serial.println(WiFi.localIP());
   if (!client.connect(host, 3000)) {
     Serial.println("connection failed");
     return;
   }
   
   /*****************************/
  
   StaticJsonDocument<600> doc;
   String JSON;
   doc["nombre"] = "ignacio";
   doc["sala"] = "Juegos";
   doc["img"] = "5d38d563ec2c35d0344d862f-611.png";
   serializeJson(doc, JSON);
   if (client.connected())
   {
    client.sendJSON("entrarChat",JSON);
   }
  
/*****************************/

   if (ITimer.attachInterruptInterval(TIMER_INTERVAL_MS * 1000, TimerHandler ))
     Serial.println("Starting  ITimer OK, millis() = " + String(millis()));
   else
     Serial.println("Can't set ITimer. Select another freq. or interval");

   // Assumming the interruptPin1 will go LOW
   attachInterrupt(digitalPinToInterrupt(interruptPin1), detectRotation1, CHANGE);  
   attachInterrupt(digitalPinToInterrupt(interruptPin2), detectRotation2, CHANGE); 
  
}

void loop() 
  {
   delay(100); 
   /*while (!client.connected())
    {
    detachInterrupt(digitalPinToInterrupt(interruptPin1));    
    detachInterrupt(digitalPinToInterrupt(interruptPin2));
    }*/
  
   String json = client.on();
    
   if (json.length() > 0) 
    {
    Serial.println();
    
    const size_t capacity = JSON_ARRAY_SIZE(3) + JSON_OBJECT_SIZE(2) +550;
    
    DynamicJsonDocument doc3(capacity);
    
    deserializeJson(doc3, json);

    String event = doc3[0]; // "mensaje"

    Serial.print("event: ");
    Serial.println(event);
    
/*****************************/

    if (event == "mensaje") 
      {
      String mensaje = doc3[1]["cuerpo"]; 
      String nombre = doc3[1]["de"];  

      Serial.print(" user ");
      Serial.print(nombre);
      Serial.print(" says: ");
      Serial.println(mensaje);
      }
    
    if (event == "frecuencia") 
      {   
      String de = doc3[1]["de"];  
      String frecuenciaa = doc3[1]["frec"]; 
      
      frecuencia = frecuenciaa.toInt();
      Serial.println(frecuencia); 
        
    }
    if (event == "LongPulse") {
      
      String de = doc3[1]["de"]; // "Holas"  
      String LongPulsee = doc3[1]["LongP"]; // "Holas"  
      
      LongPulse = LongPulsee.toInt();
      Serial.println(LongPulse);   
    }
   
    if (event == "usuarios-activos") {
      String usuario1 = doc3[1][""]; // true || false
      String usuario2 = doc3[1][""]; 
      String usuario3 = doc3[1][""]; 
        Serial.println(" user ");
        Serial.println(usuario1);
        Serial.println(usuario2);
        Serial.println(usuario3);
        Serial.print(" is in the room!");
     
    }
    if (event == "disconnect") {

      String nombre = doc3[1]["nombre"];
      Serial.print(" user: ");
      Serial.print(nombre);
      Serial.print(" has left the room");
    }
  }
}