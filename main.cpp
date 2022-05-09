/*
  RFID Convergent Build Team Spring 2022
  Complete project details at our blog.
    - ESP32: https://RandomNerdTutorials.com/esp32-firebase-realtime-database/
    - ESP8266: https://RandomNerdTutorials.com/esp8266-nodemcu-firebase-realtime-database/
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  Based in the RTDB Basic Example by Firebase-ESP-Client library by mobizt
  https://github.com/mobizt/Firebase-ESP-Client/blob/main/examples/RTDB/Basic/Basic.ino
*/

#include <Arduino.h>
#include <SPI.h>
#include <MFRC522.h>

#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "utguest"
//#define WIFI_PASSWORD "2934 5670 2272 1683 0610"

// Insert Firebase project API Key
#define API_KEY "AIzaSyBp03mvA9DgrwRlnkqbO9pOhBfOkdQL1nc"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://iot-rfid-c87c2-default-rtdb.firebaseio.com/" 

//Define Firebase Data object
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

//initialize trasnmit values to hold UID 
byte byte0 = 0;
byte byte1 = 0;
byte byte2 = 0;
byte byte3 = 0;

//initialize receive values to hold UID 
byte receivedByte0 = 0;
byte receivedByte1 = 0;
byte receivedByte2 = 0;
byte receivedByte3 = 0;

//initialize new UID array 
byte NEW_UID[4] = {0, 0, 0, 0};

//initialize default UID 
byte default_UID[4] = {1, 1, 1, 1};

//esp32 pin setup
#define RST_PIN         22          // Configurable, see typical pin layout above
#define SS_PIN          5         // Configurable, see typical pin layout above
#define ONBOARD_LED     2 

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Create MFRC522 instance

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(ONBOARD_LED, OUTPUT);
  WiFi.begin(WIFI_SSID);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  //after done connecting to WiFi, initialize RFID reader 
  while (!Serial);		// Do nothing if no serial port is opened (added for Arduinos based on ATMEGA32U4)
	SPI.begin();			// Init SPI bus
	mfrc522.PCD_Init();		// Init MFRC522
	delay(4);				// Optional delay. Some board do need more time after init to be ready, see Readme
	mfrc522.PCD_DumpVersionToSerial();	// Show details of PCD - MFRC522 Card Reader details

  //initialize dummy ID
  while ( ! mfrc522.PICC_IsNewCardPresent()) {} //wait for a card to be selected 
  //setting new uid to the RFID card
  if ( mfrc522.MIFARE_SetUid(default_UID, (byte)4, true) ) {
    Serial.println(F("Initialized."));
  }
	Serial.println(F("Scan RFID tag to send to database!"));
}

void loop() {
  digitalWrite(ONBOARD_LED, HIGH);
  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.

	if ( ! mfrc522.PICC_IsNewCardPresent()) {
		return;
	}

	// Select one of the cards
	if ( ! mfrc522.PICC_ReadCardSerial()) {
		return;
  }

  //do not read the dummy ID
  for(int i = 0; i < 4; i++){
    if(mfrc522.uid.uidByte[i] != default_UID[i]){
      break;
    }
    return;
  }

	//Scan UID
  Serial.print(F("Card UID:"));
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  } 
  Serial.println();

  //send data as 4 different bytes 
  byte0 = mfrc522.uid.uidByte[0];
  byte1 = mfrc522.uid.uidByte[1];
  byte2 = mfrc522.uid.uidByte[2];
  byte3 = mfrc522.uid.uidByte[3];
  Serial.println();

  //sending data to Firebase, reading a new card
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();

    // byte0
    if (Firebase.RTDB.setInt(&fbdo, "test/byte0", byte0)){
      Serial.println("PASSED");
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    // byte1
    if (Firebase.RTDB.setInt(&fbdo, "test/byte1", byte1)){
      Serial.println("PASSED");
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    // byte2
    if (Firebase.RTDB.setInt(&fbdo, "test/byte2", byte2)){
      Serial.println("PASSED");
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    //byte3
    if (Firebase.RTDB.setInt(&fbdo, "test/byte3", byte3)){
      Serial.println("PASSED");
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    //blinking LED to confirm it has read the card
    digitalWrite(ONBOARD_LED, LOW);
    delay(500);
    digitalWrite(ONBOARD_LED, HIGH);
    delay(500);
    digitalWrite(ONBOARD_LED, LOW);
    delay(500);

    Serial.println();
    Serial.println("Retreiving data...");
    Serial.println();

    //retrieving data from the Firebase, writing to a new card
    //byte0
    if (Firebase.RTDB.getInt(&fbdo, "/test/byte0")) {
      if (fbdo.dataType() == "int") {
        receivedByte0 = fbdo.intData();
        NEW_UID[0] = receivedByte0;
        Serial.print("Retrieved UID: ");
        Serial.print(receivedByte0, HEX);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
    //byte1
    if (Firebase.RTDB.getInt(&fbdo, "/test/byte1")) {
      if (fbdo.dataType() == "int") {
        receivedByte1 = fbdo.intData();
        NEW_UID[1] = receivedByte1;
        Serial.print(" ");
        Serial.print(receivedByte1, HEX);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
    //byte2
    if (Firebase.RTDB.getInt(&fbdo, "/test/byte2")) {
      if (fbdo.dataType() == "int") {
        receivedByte2 = fbdo.intData();
        NEW_UID[2] = receivedByte2;
        Serial.print(" ");
        Serial.print(receivedByte2, HEX);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }
    //byte3
    if (Firebase.RTDB.getInt(&fbdo, "/test/byte3")) {
      if (fbdo.dataType() == "int") {
        receivedByte3 = fbdo.intData();
        NEW_UID[3] = receivedByte3;
        Serial.print(" ");
        Serial.println(receivedByte3, HEX);
      }
    }
    else {
      Serial.println(fbdo.errorReason());
    }

    delay(1000);
    Serial.println("Changing UID of card... ");
    while ( ! mfrc522.PICC_IsNewCardPresent()) {} //wait for a card to be selected 

    //setting new uid to the RFID card
    if ( mfrc522.MIFARE_SetUid(NEW_UID, (byte)4, true) ) {
    Serial.println(F("Wrote new UID to card."));
    }
    digitalWrite(ONBOARD_LED, HIGH);

    while(1){}
    
  }
}
